// Tạo 1 mảng chứa 1000 phần tử random các ký tự a-z (cả viết thường lẫn viết hoa), độ dài mỗi phần tử ngẫu nhiên từ 1-5 ký tự
function createRandomArray() {
  const array = [];
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < 1000; i++) {
    let randomLength = Math.floor(Math.random() * 5) + 1;
    let element = "";

    for (let j = 0; j < randomLength; j++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      element += characters[randomIndex];
    }

    array.push(element);
  }

  return array;
}

// Sắp xếp mảng theo 5 cách khác nhau

// Cách 1: Sử dụng phương thức sort()
function sortUsingSortMethod(arr) {
  return arr.sort();
}

// Cách 2: Sử dụng giải thuật Bubble Sort
function sortUsingBubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// Cách 3: Sử dụng giải thuật Insertion Sort
function sortUsingInsertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

// Cách 4: Sử dụng giải thuật Selection Sort
function sortUsingSelectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

// Cách 5: Sử dụng giải thuật Quick Sort
function sortUsingQuickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...sortUsingQuickSort(left), pivot, ...sortUsingQuickSort(right)];
}

// Đánh giá thời gian chạy của 5 giải thuật
function measureSortingTime(sortFunction, arr) {
  const startTime = new Date().getTime();
  sortFunction(arr);
  const endTime = new Date().getTime();
  return endTime - startTime;
}

// Tạo mảng và in ra các phần tử đã tạo
const array = createRandomArray();
console.log("Mảng ban đầu:", array);

// Sắp xếp và đánh giá thời gian chạy cho các giải thuật
console.log("--- Kết quả sắp xếp ---");
console.log("Cách 1 (sort method):", sortUsingSortMethod([...array]));
console.log(
  "Thời gian chạy của cách 1:",
  measureSortingTime(sortUsingSortMethod, [...array]),
  "ms"
);

console.log("Cách 2 (Bubble Sort):", sortUsingBubbleSort([...array]));
console.log(
  "Thời gian chạy của cách 2:",
  measureSortingTime(sortUsingBubbleSort, [...array]),
  "ms"
);

console.log("Cách 3 (Insertion Sort):", sortUsingInsertionSort([...array]));
console.log(
  "Thời gian chạy của cách 3:",
  measureSortingTime(sortUsingInsertionSort, [...array]),
  "ms"
);

console.log("Cách 4 (Selection Sort):", sortUsingSelectionSort([...array]));
console.log(
  "Thời gian chạy của cách 4:",
  measureSortingTime(sortUsingSelectionSort, [...array]),
  "ms"
);

console.log("Cách 5 (Quick Sort):", sortUsingQuickSort([...array]));
console.log(
  "Thời gian chạy của cách 5:",
  measureSortingTime(sortUsingQuickSort, [...array]),
  "ms"
);
