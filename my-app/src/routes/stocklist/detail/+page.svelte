<script>
    export let data;
    const stockData = data.data;

</script>

<body>
    <h1>새글 작성</h1>
    <form method="POST">
        <div>
            <label for="date">날짜:</label>
            <input type="date" id="date" name="date" required/>
        </div>
    
        <div>
            <label for="stock_name">종목:</label>
            <input type="text" id="stock_name" name="stock_name" placeholder="종목 입력" />
        </div>

        <div>
            <label for="stock_count">구매 주식수:</label>
            <input type="text" id="stock_count" name="stock_count" placeholder="숫자만 입력" />
        </div>

        <div>
            <label for="stock_amount">구매 금액:</label>
            <input type="text" id="stock_amount" name="stock_amount" placeholder="숫자만 입력" />
        </div>  

        <div>
            <label for="commission">수수료:</label>
            <input type="text" id="commission" name="commission" placeholder="숫자만 입력" />
        </div>

        <div>
            <label for="currency_unit">단위:</label>
            <input type="text" id="currency_unit" name="currency_unit" placeholder="통화단위 입력" />
        </div>

        <div>
            <label for="unit_price">1주당 체결가:</label>
            <input type="text" id="unit_price" name="unit_price" placeholder="숫자만 입력" />
        </div>

        <div>
            <label for="exchange_rate">적용환율:</label>
            <input type="text" id="exchange_rate" name="exchange_rate" placeholder="숫자만 입력" />
        </div>

        <div>
            <label for="KRW_conversion">원화환산:</label>
            <input type="text" id="KRW_conversion" name="KRW_conversion" placeholder="숫자만 입력" />
        </div>

        <div>
            <label for="fractional_investment">소수점 투자 여부:</label>
            <div class="radio-group">
                <input type="radio" id="fractional_investment_yes" name="fractional_investment" value="Y">
                <label for="fractional_investment_yes" style="width: 50px;">Yes</label>
                <input type="radio" id="fractional_investment_no" name="fractional_investment" value="N">
                <label for="fractional_investment_no" style="width: 50px;">No</label>
            </div>
        </div>

        <div>
            <label for="automated_investment">자동투자 여부:</label>
            <div class="radio-group">
                <input type="radio" id="automated_investment_yes" name="automated_investment" value="Y">
                <label for="automated_investment_yes" style="width: 50px;">Yes</label>
                <input type="radio" id="automated_investment_no" name="automated_investment" value="N">
                <label for="automated_investment_no" style="width: 50px;">No</label>
            </div>
        </div>

        <div>
            <label for="flatform">사용플랫폼:</label>
            <select id="flatform" name="flatform">
                <option value="mini stack">mini stack</option>
                <option value="platform2">플랫폼 2</option>
                <option value="platform3">플랫폼 3</option>
            </select>
        </div>

        <div>
            <label for="investment_country">시장(국가):</label>
            <select id="investment_country" name="investment_country">
                <option value="국내">국내</option>
                <option value="미국" selected>미국</option>
                <option value="country3">국가 3</option>
            </select>
        </div>

        <div>
            <label for="account_type">계좌 종류:</label>
            <select id="account_type" name="account_type">
                <option value="일반">일반</option>
                <option value="type2">계좌 종류 2</option>
                <option value="type3">계좌 종류 3</option>
            </select>
        </div>

        <div>
            <label for="purchasing_status">구매 여부:</label>
            <div class="radio-group">
                <input type="radio" id="purchasing_status_yes" name="purchasing_status" value="Y">
                <label for="purchasing_status_yes" style="width: 50px;">Yes</label>
                <input type="radio" id="purchasing_status_no" name="purchasing_status" value="N">
                <label for="purchasing_status_no" style="width: 50px;">No</label>
            </div>
        </div>

        <div>
            <label for="selling_status">판매 여부:</label>
            <div class="radio-group">
                <input type="radio" id="selling_status_yes" name="selling_status" value="Y">
                <label for="selling_status_yes" style="width: 50px;">Yes</label>
                <input type="radio" id="selling_status_no" name="selling_status" value="N">
                <label for="selling_status_no" style="width: 50px;">No</label>
            </div>
        </div>

        <hr>

        <button type="submit">글 작성</button>
    </form>
</body>

<style>
    label {
        display: block;
        width: 15%;
        margin-top: 10px;
        margin-right: 10px; /* 라벨과 입력 요소 사이에 오른쪽 마진 추가 */
    }

    input[type="text"], input[type="date"], select {
        width: 200px;
    }

    .radio-group {
        display: flex;
        align-items: center;
    }

    .radio-group input[type="radio"] {
        margin-right: 5px;
    }

    h1 {
        text-align: center; /* h1 태그 가운데 정렬 */
        margin-top: 70px; /* h1 태그 위에 여백을 20px로 설정 */
    }

    button {
        margin-top: 10px;
        width: 200px;
    }

    div {
        display: flex;
        width: 100%; /* 버튼 그룹 전체 너비를 차지하도록 함 */
    }

</style>
