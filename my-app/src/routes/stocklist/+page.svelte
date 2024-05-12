<script>
    import { goto } from '$app/navigation';
    export let data;
    const stockData = data.data;

// 각 데이터의 날짜 정보를 가공하는 함수
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    }
</script>

<svelte:head>
    <title>구매 종목 리스트</title>
    <meta name="stocklist" content="구매 종목 리스트" />
</svelte:head>

<h1>구매 종목 리스트</h1>

<button on:click={() => goto('./stocklist/write')}>새 글 작성</button>

{#if stockData && stockData.length > 0}
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
                    <td>{formatDate(item.date)}</td>
                </tr>
            {/each}
        </tbody>
    </table>
{:else}
    <p>데이터가 없습니다.</p>
{/if}
