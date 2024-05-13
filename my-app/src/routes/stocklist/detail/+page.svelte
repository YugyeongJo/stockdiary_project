<body>
    <h1>상세보기</h1>
    <form method="POST">
        <div>
            <label for="date">날짜:</label>
            <input type="text" id="date" name="date" placeholder="" required/>
        </div>

        <div>
            <label for="stock_name">종목:</label>
            <input type="text" id="stock_name" name="stock_name" placeholder="" />
        </div>

        <div>
            <label for="stock_count">구매 주식수:</label>
            <input type="text" id="stock_count" name="stock_count" placeholder="" />
        </div>

        <div>
            <label for="stock_amount">구매 금액:</label>
            <input type="text" id="stock_amount" name="stock_amount" placeholder="" />
        </div>

        <div>
            <label for="commission">수수료:</label>
            <input type="text" id="commission" name="commission" placeholder="" />
        </div>

        <div>
            <label for="currency_unit">단위:</label>
            <input type="text" id="currency_unit" name="currency_unit" placeholder="" />
        </div>

        <div>
            <label for="unit_price">1주당 체결가:</label>
            <input type="text" id="unit_price" name="unit_price" placeholder="" />
        </div>

        <div>
            <label for="exchange_rate">적용환율:</label>
            <input type="text" id="exchange_rate" name="exchange_rate" placeholder="" />
        </div>

        <div>
            <label for="KRW_conversion">원화환산:</label>
            <input type="text" id="KRW_conversion" name="KRW_conversion" placeholder="" />
        </div>

        <div>
            <label for="fractional_investment">소수점 투자 여부:</label>
            <input type="text" id="fractional_investment" name="fractional_investment" placeholder="" />
        </div>

        <div>
            <label for="automated_inverstment">자동투자 여부:</label>
            <input type="text" id="automated_inverstment" name="automated_inverstment" placeholder="" />
        </div>

        <div>
            <label for="investment_country">시장(국가):</label>
            <input type="text" id="investment_country" name="investment_country" placeholder="" />
        </div>

        <div>
            <label for="purchasing_status">구매 여부:</label>
            <input type="text" id="purchasing_status" name="purchasing_status" placeholder="" />
        </div>

        <div>
            <label for="selling_status">판매 여부:</label>
            <input type="text" id="selling_status" name="selling_status" placeholder="" />
        </div>
        
        <div>
            <button type="submit">수정하기</button>
            <button type="submit">삭제하기</button>
        </div>
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

    h1 {
        text-align: center; /* h1 태그 가운데 정렬 */
        margin-top: 70px; /* h1 태그 위에 여백을 20px로 설정 */
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-items: center; /* 다른 내용들 가운데 정렬 */
    }

    button {
        margin-top: 10px;
        width: 200px;
    }

    button[type="submit"]:nth-child(2) {
        background-color: #ff6666;
        border: none; /* 삭제하기 버튼의 테두리 파란선 없애기 */
        margin-left: 10px; /* 두 버튼 사이 간격 벌리기 */
    }

    div {
        display: flex;
        justify-content: center;
        width: 100%; /* 버튼 그룹 전체 너비를 차지하도록 함 */
    }
</style>
