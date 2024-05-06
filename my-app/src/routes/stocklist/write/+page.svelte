<body>
    <h1>새글 작성</h1>
    <form method="POST">
        <label for="date">날짜:</label>
        <input type="text" id="date" name="date" placeholder="" required/>

        <label for="stock_name">종목:</label>
        <input type="text" id="stock_name" name="stock_name" placeholder="" />

        <label for="stock_count">구매 주식수:</label>
        <input type="text" id="stock_count" name="stock_count" placeholder="" />

        <label for="stock_amount">구매 금액:</label>
        <input type="text" id="stock_amount" name="stock_amount" placeholder="" />

        <label for="commission">수수료:</label>
        <input type="text" id="commission" name="commission" placeholder="" />

        <label for="currency_unit">단위:</label>
        <input type="text" id="currency_unit" name="currency_unit" placeholder="" />

        <label for="unit_price">1주당 체결가:</label>
        <input type="text" id="unit_price" name="unit_price" placeholder="" />

        <label for="exchange_rate">적용환율:</label>
        <input type="text" id="exchange_rate" name="exchange_rate" placeholder="" />

        <label for="KRW_conversion">원화환산:</label>
        <input type="text" id="KRW_conversion" name="KRW_conversion" placeholder="" />

        <label for="fractional_investment">소수점 투자 여부:</label>
        <input type="text" id="fractional_investment" name="fractional_investment" placeholder="" />

        <label for="automated_inverstment">자동투자 여부:</label>
        <input type="text" id="automated_inverstment" name="automated_inverstment" placeholder="" />

        <label for="investment_country">시장(국가):</label>
        <input type="text" id="investment_country" name="investment_country" placeholder="" />

        <label for="purchasing_status">구매 여부:</label>
        <input type="text" id="purchasing_status" name="purchasing_status" placeholder="" />

        <label for="selling_status">판매 여부:</label>
        <input type="text" id="selling_status" name="selling_status" placeholder="" />

        <button type="submit">글 작성</button>
    </form>
</body>

<style>
    label {
        display: block;
        margin-top: 10px;
    }

    input {
        width: 200px;
    }

    button {
        margin-top: 10px;
    }
</style>
