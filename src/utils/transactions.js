const transactionsFunction = (transactions) => {
  const jsx = transactions.map((trans) => {
    const type = trans.type === 'credit' ? 'recieved' : 'sent';
    const transDate = new Date(trans.createdOn);
    const formattedDate = `${transDate.getDate()}-${transDate.getMonth() + 1}-${transDate.getFullYear()}`;
    const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
    });

    return (`
    <div class="row">
    <p class="column">${formattedDate}</p>
    <p class="column">${trans.accountNumber}</p>
    <p class="column">${formatter.format(trans.newBalance)}</p>
    <p class="column amt" id="${type}">${formatter.format(trans.amount)}</p>
    </div>
    `);
  });
  return jsx;
};

export default transactionsFunction;
