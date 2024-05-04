<body>
    <h1>새글 작성</h1>
    <form>
        <label for="date">날짜:</label>
        <input type="text" id="date" name="date" />

        <label for="stock">종목:</label>
        <input type="text" id="stock" name="stock" />

        <label for="quantity">구매 주식수:</label>
        <input type="text" id="quantity" name="quantity" />

        <label for="amount">구매 금액:</label>
        <input type="text" id="amount" name="amount" />

        <label for="fee">수수료:</label>
        <input type="text" id="fee" name="fee" />

        <!-- 기타 필드들을 추가할 수 있습니다 -->

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
