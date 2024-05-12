<script>
    function openNewPostWindow() {
        window.open("./stocklist/write", "newpost", "width=600,height=400");
    }

    export let stockData;
</script>

<svelte:head>
  <title>구매 종목 리스트</title>
  <meta name="stocklist" content="구매 종목 리스트" />
</svelte:head>

<h1>구매 종목 리스트</h1>

<button on:click={openNewPostWindow}>새 글 작성</button>

<table>
    <thead>
        <tr>
            <th>번호</th>
            <th>주식 종목</th>
            <th>주식 수</th>
            <th>날짜</th>
        </tr>
    </thead>
    <tbody>
        {#each stockData as item, index}
        <tr>
            <td>{index + 1}</td>
            <td>{item.stock_name}</td>
            <td>{item.stock_count}</td>
            <td>{item.date}</td>
        </tr>
        {/each}
    </tbody>
</table>
