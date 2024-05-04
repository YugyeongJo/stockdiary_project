<script>
    export let data;
    
</script>

<div class="container">
    <nav>
        <ul>
            <!-- <li><a href="#" class="secondary">Menu</a></li> -->
            <li><a href="/stocklist">Stock List</a></li>
            <li><a href="/report">Report</a></li>
        </ul>
        <ul>
            <li>
                <a
                    href="/"
                    style="color: orange; font-weight:bold; font-size: 2rem"
                >
                    Stock Diary
                </a>
            </li>
        </ul>
        <ul>
            {#if data?.user_profile}
                <li>
                    <form action="/logout" method="post">
                        <button>로그아웃</button>
                    </form>
                </li>
            {:else}
                <li><a href="/login">로그인</a></li>
                <li><a href="/register">회원가입</a></li>
            {/if}
        </ul>
    </nav>
    <slot />
</div>
<!-- <aside class="bd-aside sticky-xl-top text-body-secondary align-self-start mb-3 mb-xl-5 px-2">
    <nav class="small" id="toc">
    <ul class="list-unstyled">
        <li class="my-2">
        <ul class="list-unstyled ps-3 collapse show" id="contents-collapse" style="">
            <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#typography">Typography</a></li>
            <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#images">Images</a></li>
            <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#tables">Tables</a></li>
            <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#figures">Figures</a></li>
        </ul>
        </li>
    </ul>
    </nav>
</aside> -->