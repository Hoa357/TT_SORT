
function sortArray(method) {
    const input = document.getElementById('arrayInput').value;
    let array = input.split(',').map(Number);
    let result;

    switch (method) {
        case 'bubble':
            result = bubbleSort(array);
            break;
        case 'selection':
            result = selectionSort(array);
            break;
        case 'insertion':
            result = insertionSort(array);
            break;
    }

    document.getElementById('result').innerText = result.join(', ');
}

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

function insertionSort(arr) {
    let n = arr.length;
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

function clearInput() {
    document.getElementById('arrayInput').value = ''; // Xóa ô nhập liệu
    document.getElementById('result').innerText = ''; // Xóa kết quả
}