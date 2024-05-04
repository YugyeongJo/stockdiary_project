<script>
    function openNewPostWindow() {
        window.open("./stocklist/write", "newpost", "width=600,height=400");
    }
</script>

<h1>간단한 게시판</h1>

<button on:click={openNewPostWindow}>새 글 작성</button>

<table>
    <tr>
        <th>번호</th>
        <th>제목</th>
        <th>작성자</th>
        <th>작성일</th>
    </tr>
    <tr>
        <td>1</td>
        <td>첫 번째 글 제목</td>
        <td>작성자1</td>
        <td>2024-05-04</td>
    </tr>
    <tr>
        <td>2</td>
        <td>두 번째 글 제목</td>
        <td>작성자2</td>
        <td>2024-05-04</td>
    </tr>
    <!-- 추가적인 글은 필요에 따라 계속해서 추가할 수 있습니다 -->
</table>
