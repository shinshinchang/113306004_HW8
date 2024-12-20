function calculate() {
    // 獲取用戶輸入
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const operator = document.getElementById("operator").value;
    const resultElement = document.getElementById("result");
  
    // 檢查是否為有效輸入
    if (isNaN(num1) || isNaN(num2)) {
      resultElement.innerText = "Result = Invalid Input";
      return;
    }
  
    let result;
    // 執行運算
    switch (operator) {
      case "+":
        result = add(num1, num2);
        break;
      case "-":
        result = subtract(num1, num2);
        break;
      case "*":
        result = multiply(num1, num2);
        break;
      case "/":
        if (num2 === 0) {
          resultElement.innerText = "Result = Cannot divide by zero";
          return;
        }
        result = divide(num1, num2);
        break;
      default:
        resultElement.innerText = "Result = Invalid Operator";
        return;
    }
  
    // 顯示結果，保留兩位小數
    resultElement.innerText = `Result = ${result.toFixed(2)}`;
}
  
  // 定義運算函數
  function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return a / b;
  }  