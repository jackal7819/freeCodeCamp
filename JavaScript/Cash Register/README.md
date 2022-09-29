---Cash Register---

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)

---Касовий апарат---

Розробіть функцію касового апарату checkCashRegister(), у якій перший параметр - це сума покупки (price), другий параметр - сума платежу (cash), і сума готівки в касі (cid) - третій параметр.

cid - це двовимірний масив, що містить список доступних валют.

Функція checkCashRegister() завжди повинна повертатися як об'єкт з ключем status і ключем change.

Повернути {status: "INSUFFICIENT_FUNDS", change: []} якщо сума готівки в касі менша ніж здача, або якщо ви не можете віддати без здачі.

Повернути {status: "CLOSED", change: [...]} сума готівки в касі є значенням для ключа change якщо вона дорівнює здачі.

В іншому випадку, повернути {status: "OPEN", change: [...]}, здачу в монетах і банкнотах, в порядку від найбільшої до найменшої, так як значення ключа change.

Грошова одиниця	Сума
Пенні	$0.01 (ПЕННІ)
Нікель	$0.05 (НІКЕЛЬ)
Дайм (монета у 10 центів)	$0.1 (ДАЙМ)
Чверть	$0.25 (ЧВЕРТЬ)
Долар	$1 (ОДИН)
П'ять доларів	$5 (П'ЯТЬ)
Десять доларів	$10 (ДЕСЯТЬ)
Двадцять доларів	$20 (ДВАДЦЯТЬ)
Сто доларів	$100 (СТО)
