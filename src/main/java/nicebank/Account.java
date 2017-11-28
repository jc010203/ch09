package nicebank;

/**
 * Created by juan.hernandez on 11/20/17.
 */
public class Account {

    private Money balance = new Money();
    private TransactionQueue queue = new TransactionQueue();

    public void credit(Money amount) {
        queue.write("+" + amount.toString());
    }

    public void debit(int dollars) {
        Money amount = new Money(dollars, 0);
        queue.write("-" + amount.toString());
    }

    public Money getBalance() {
        return BalanceStore.getBalance();
    }
}
