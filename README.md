๐ง๊ธฐ์ ์คํ (TypeScript/ Recoil/ React Query/ Styled-Components)

# Netflix ํด๋ก ์ฝ๋ฉ์๋๋น :)
 [๊ตฌ๊ฒฝํ๊ธฐ๐](https://react-master-green.vercel.app/)

## ๐ฎ ์ฃผ์๊ธฐ๋ฅ
    - ์ํ(์์์, ์ธ๊ธฐ์, top10) ํ์ด์ง(OpenApi)
    - tv(์์์, ์ธ๊ธฐ์, top10) ํ์ด์ง(OpenApi)
    - ๋ด๊ฐ ์ฐํ ์ฝํ์ธ  ๋ณด๊ธฐ(LocalStorage & recoil)
    - ๊ฒ์ ๊ธฐ๋ฅ(query & debounce)
        => ๋ฌดํ์คํฌ๋กค(useInview) 
        => lazyLoad(IntersectionObserver)

##  ๐จ Styled
    - White Mode (styled-components & recoil)
    - ์ฌ๋ผ์ด๋ (useRef)
    - ํค๋ ์คํฌ๋กค ์ ๋ณ๊ฒฝ(eventlitener & thorttle)
    - nav ํด๋ฆญ ์ ์ด๋ํ๋ ๊ณต(useMacth)
    
## ๐โ ํธ๋ฌ๋ธ์ํ

    0) debounec & lazyLoad
    ๊ฒ์ํ์ด์ง ๋ญ๊ฐ load์๊ฐ ๊ฑฐ์ฌ๋ ค์ ๊ณ ๋ฏผํ๋ค๊ฐ debounce & lazyLoad ์ ์ฉํจ
    ๋, ๋ฌดํ์คํฌ๋กค๋ก ๋ฐ๊พธ๊ณ ๋๋ ๊ฒ์์ ๋ฐ๋ผ ์ด๋ฏธ์ง๊ฐ ์์ฒญ ์์์ ธ์ lazyLoad ์ ์ ์ฉํ๋ค ์ด๊ฒ์ ๊ฒ ์ฐ์ตํ๊ธฐ ์ข์์!

    1) detail ๋ชจ๋ฌ์ฐฝ ๊ณ ํ์ง ์ด๋ฏธ์ง๋ฅผ ์ด๋ป๊ฒ ์ด์ง๊ฐ์์ด ๋ณด์ฌ์ค ์ ์์๊น?
        
<details>

<summary>โ ์ผ๋จ ์ฝ๋๋ก ํด๊ฒฐํด๋ณผ๋ผ๊ณ ํ์ (์คํจ)</summary>

```JavaScript
const [getPost, setGetPost] = useState(clickPosterImg || "") // posterImg๋ฅผ props๋ก ๋ฐ์์ api ์์ฒญ 1ํ ๊ฐ์(๋ชจ๋ฌ ์ผ์ง๋์๊ฐ ์ฒด๊ฐ๋ ๋งํผ ๋นจ๋ผ์ง)
const [check, setCheck] = useState(false)
function getPostOriginal (){
const ๊ณ ํ์ง์ด๋ฏธ์ง = getPosterImg(movie?.backdrop_path || "") //๊ณ ํ์ง ์ด๋ฏธ์ง ๋ถ๋ฌ์ค๋ ๋์ ๊ธฐ์กด ์ฌ์ง ๋ณด์ฌ์ฃผ์
setTimeout(() => {
setGetPost(๊ณ ํ์ง์ด๋ฏธ์ง) 
}, 1000);
}
// ์๊ฐํ๋๋ก ์๋์ ํ๋๋ฐ ๋ญ๊ฐ ๊ณ ํ์ง ๋ฐ๋๋ฉด์ ๋ ๋๋ง ํ๋๊ฒ ๋ง์์ ์๋ค๊ธดํจ lazyLoad๋ ์ํตํ๊ณ  ๋ญ๊ฐ css ํจ๊ณผ๋ก ํด๊ฒฐ๋ฐฉ๋ฒ ์์๊ฑฐ๊ฐ์๋ฐ..

useEffect(()=>{
if(movie) { 
getPostOriginal() 
} else { 
setTimeout(() => {
setGetPost(getPosterImg(data?.backdrop_path || "")); setCheck(true) 
}, 1000);
} // props๋ก ์บ์ฑํ์ผ๋ url๋ก ๋ฐ๋ก ๋ค์ด์ค๋๊ฑฐ ๋์
},[check])
``` 
</details>

<details>

<summary>โกlazyLoad โ ๋ฒ์ด๋ ๋น์ทํ๋๋์ด์ด์ ์๋ ๊ฑฐ ๊ฐ๊ธดํ๋๋ฐ ์ญ์ ์๋จ(์คํจ)</summary>

</details>

<details>

<summary>โขreact-progressive-graceful-image ๋ผ์ด๋ธ๋ฌ๋ฆฌ(์ฑ๊ณต!)</summary>
    [react-progressive-graceful-image] ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ก ํด๊ฒฐ! ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์์ฐ๊ณ  ํด๋ณด๋ คํ๋๋ฐ typeScript์ค๋ ฅ ์ด์๋ก ์คํจํจ ์ด๋ฏธ์ง ๋ก๋ฉ ์ค์๋ ์ ํ์ง ์ด๋ฏธ์ง ๋ณด์ฌ์ฃผ๊ณ  ์์ฐ์ค๋ฝ๊ฒ ๊ณ ํ์ง์ด ๋ณด์ฌ์งbb
    ๊ธฐ์กด์ ์ฌ๋ผ์ด๋ ์ด๋ฏธ์ง๋ฅผ w500 ์ ๋ ํ์ง๋ก ๋ณด์ฌ์ฃผ๋ค๊ฐ w200 ์ผ๋ก ๋ฐ๊พธ๊ณ  ํ์ํ ๋๋ง ํ์ง์ ์ฌ๋ฆฌ๋ ค๊ณ  progressiveImage ์กฐ๊ธ์ฉ ๋ฃ์ด์ฃผ๋๊น ํ์ด์ง ์๋๊ฐ ๋ง๋ ์๋๊ฒ ์ฌ๋ผ๊ฐ๋ค
    ์ด๋ฏธ์ง๊ฐ ์๋์ ์ํฅ์ฃผ๋๊ฑด ์๊ณ ์์๋๋ฐ ์ง์  ์ฒด๊ฐํด๋ณด๋๊น ์๋นํ ์ข์์๐
</details>

</br>

    2) splice vs slice 
    splice๋ ๊ธฐ์กด ๋ฐฐ์ด์ ๋ญ๊ฐ ๋ค. api๋ก 100๊ฐ ์๋ฃ์์ ์์๊บผ 20๊ฐ๋ง ๊ฐ์ ธ์จ๋ค๊ณ  ํ ๋ splice๋ก ์๋ผ์ ์ฌ๋ฌ๋ฒ ํธ์ถํ๋ฉด 0~20 21~40 41~60 ๋ฒ์งธ ๋ฐฐ์ด์ ๊ฐ์ ธ์ค๋ ์ฃผ์ํ์. 

    3) type ํธ๋ค๋ง
    openAPI ๋ค ์ธ๊ฑด ์๋์ง๋ง ๋ชจ๋  ๊ฐ์ฒด์ ํ์์ ์ฃผ๊ณ  ์ถ์๋ค. ์ฝ์์์ [Store object as global variable] ๋ก temp ๋ณ์์ ๋ฃ์ ๋ค Object.keys(temp1) & Object.values(temp1).map(v=> typeof(v))๋ก key๊ฐ์ ๋น๊ต์  ์ฝ๊ฒ type ์ง์  ํด์ค ์ ์์์

    4) styled-components๋ก <ThemeProvider theme={theme}>์ ์ค๋ typescript ์๋์์ฑ ๋์์ ๋ฐ์ผ๋ ค๋ฉด ์ ์ธ ํ์ผ์ ๋ฐ๋ก ์์ฑํด์ค์ผ๋จ. styled.d.ts ๋ก ์ ์ธํด์ค์ผ ๋๋๋ฐ ์ด๋ ํ์ผ๋ช styled.d.ts๋ก ๊ณ ์ ์ ๋ค๋ฅธ ์ด๋ฆ์๋จ ํ์ผ๋ช ๋ค๋ฅธ๊ฑธ๋ก ํ๋ค๊ฐ ํ์ฐธ ๊ณ ์ํ๋ค.

    5) Immutable 
    let copy = [...LikedArr]; // ๋ถ๋ณ์ฑ ์กฐ์ฌํ์ (ts์ ์๊ฑธ๋ฆฌ๋๋ผ..?) ์คํ๋ ๋ ์ฐ์ฐ์ ๊น๋นกํด์ ์์ฒญ ํด๋งธ๋ค

    6) width: 100% vs 100vw 
    ๊ธฐ์กด์ 100vw๋ก ์ก์์๋๋ ๊ด์ฐฎ์๋๋ฐ ํ์ ์ปดํฌ๋ํธ css๊ฐ ์ฃผ๋ค๋ณด๋๊น ๊ธฐ์กด์ ์ก์๋ 100vw๊ฐ ์ข๋ก ์คํฌ๋กค๋ฐ๊ฐ ์๊ธฐ๋ ์์ธ์ด ๋์๋ค. ์ปดํฌ๋ํธ ๋ผ๋ฆฌ ์๋ก ์ํฅ์ ์ฃผ๋๊ฑธ ๋ ๊ณ ๋ฏผํ๋ฉด์ ์์ํด์ผ๊ฒ ๋ค
    (+์ฌ๋ผ์ด๋๋ ์์ div์ overflow-hidden์ ์ค์ผ๋จ.)

    7) ์ํ data๋ tv data๋ openApi type๊ฐ์ด ์กฐ๊ธ์ฉ ๋ฌ๋ผ์ ์ปดํฌ๋ํธ๋ ์ปค์คํํ์ ๋ ์ฌํ์ฉ ๋ชปํ๊ฑฐ๊ฐ์ ์์ฝ๋ค. ๋ก์ปฌ์คํ ๋ฆฌ์ง์ ๋ด์ ๋ ๋ง์  type์ด ๋ค๋ฅด๋ ๋ฐ๋ก ๋ด๊ณ  ์ฐํ ์ฝํ์ธ ์๋ ๋ฐ๋ก ๋ณด์ฌ์ฃผ๊ฒ๋ฐ์ ๊ตฌํ์ ๋ชปํด์ ๋๋ฌด ์์ฌ์..
    ๊ณ ์ ๋ type๊ฐ์ด๋ผ๋ ๋ณํํด์ ์ฌ์ฉํ๊ฑฐ๋ || ๋ก ์ ํ์  type ๋ฐ๋ ๊ฑฐ ๋ ์ฐ์ตํด๋ด์ผ๊ฒ ๋ค.
    
    
    
</br>

# ๐งํ๋ก์ ํธ ์ค์ ํ์ตํ ๋ด์ฉ
## 1. styled-components
    - ์์ฑ ${props => props.bgColor || 'yellow'}
    - ์์ const Circle = styled(Box)
    - ์ ๋๋ฉ์ด์ const spin = keyframes >> animation : ${spin} 1s infinite;
    - ์์(๊ฐ์ฒด) <ThemeProvider theme={darkTheme}> <App /> </ThemeProvider>

## 2. TypeScript
    - Props์ type ์ฃผ๊ธฐ
        -> interface TypeProps {
            bgColor: string
        }
        const Components = ({bgColor} : TypeProps) => return <div>{bgColor}</div>

    - styled์ type ์ฃผ๊ธฐ
        -> const Components = () => {
            return <Styled bgColor={bgColor}/>
        }
        const Styled = styled.div<TypeProps>`
        background-color: ${props=>props.bgColor};
        `
    - HTML์ type ์ฃผ๊ธฐ
        -> onChange = (e: React.ChangeEvent<HTMLInpulElement>) => {};
        -> form = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
        };

## 3. React Router V6
    - createBrowserRouter & errorElement
        -> export const router = createBrowserRouter([{
            path:"/",
            element: <Root />,
            children: [
            {
                path:'',
                element: <Home />
            },  
            {
                path:'about',
                element: <About />,
                errorElement: <ErrorComponent />
            }
            errorElement: <Error/>
        }])

    - Outlet
        -> this ๋๋์ ๊ตฌ์กฐ๋ก createBrowserRouter์์ children์ผ๋ก ์ค์ ํ component๋ฅผ ๋ ๋๋ง ํ  ์ ์์ 

    - useOutletContext (children component๋ก props ๋๊ธฐ๊ธฐ)
        -> <Outlet context={userName: 'jack'}>
            
            interface UserNameType {
                userNage: string
            }
            const {userName} = useOutletContext<UserNameType>();
