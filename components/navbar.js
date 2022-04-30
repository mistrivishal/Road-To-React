

const navbar = ()=>{
    return`
    <div id="navbar">
        <div id="left">
            <div id="lines">
                <i class="fa-solid fa-bars"></i>
            </div>
            <div id="logo">
                <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="">
            </div>
            <div>TV</div>
            <div>Movies</div>
            <div>Sports</div>
            <div>Diseny+</div>
            <div    >
                <img src="https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg" alt="">
            </div>
        </div>
        <div id="right">
            <div>
                <img src="https://www.hotstar.com/assets/c724e71754181298e3f835e46ade0517.svg" alt="">
            </div>
        </div>
    </div>`
}

const popular = async () => {
    try {
        const URL = `https://api.themoviedb.org/3/movie/popular?api_key=401ee4240eeef2d5a1879ac1669677bb&language=en-US&page=1&Results=50`;
        const res = await fetch(URL);
        const pop = await res.json()
        return pop
    }
    catch (err) {
        console.log(err)
    }
}
function appenpop(data, container) {
    data.forEach(function (ele) {
        // console.log(ele.poster_path)
        let box = document.createElement("div");

        let img = document.createElement("img");
        img.src = `https://image.tmdb.org/t/p/original${ele.poster_path}`
        img.style.cursor = "pointer"

        box.append(img)
        container.append(box)
    })
}
export {navbar,popular,appenpop}