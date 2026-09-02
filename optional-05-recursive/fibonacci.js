function fibonacci(n) {
  if (n == 0) return [0];
  if (n == 1) return [0, 1];

  const arr = fibonacci(n - 1);
  return [...arr, arr[n - 1] + arr[n - 2]];
}

export default fibonacci;
