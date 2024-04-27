<script>
    export let data;
</script>

<!-- 로그인 후 대시보드 보여주는 화면 -->
{#if data?.user_profile}
<h1>Welcome {data.user_profile?.name || ""}</h1>
<!-- javascript 에서 ? 없으면 안된다는 의미 -->

<!-- 기본화면 -->
{:else}
<h1>SORRY</h1>
{/if}