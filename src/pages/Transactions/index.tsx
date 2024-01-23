import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Summary />
            <TransactionContainer>
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Development</td>
                            <td>
                                <PriceHighlight variant="income">
                                    $ 12,000.00
                                </PriceHighlight>
                            </td>
                            <td>Sales</td>
                            <td>23/01/2023</td>
                        </tr>
                        <tr>
                            <td width="50%">Development</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    $ -9,000.00
                                </PriceHighlight>
                            </td>
                            <td>Sales</td>
                            <td>23/01/2023</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionContainer>
        </div>
    )
}