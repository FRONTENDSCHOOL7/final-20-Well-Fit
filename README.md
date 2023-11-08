# 🏋️ Well-Fit
---
## 목차 
<details><summary>목차
</summary>

1. [Well-Fit 소개](#1-well-fit-소개)
2. [팀원 소개](#2-팀원-소개)
3. [개발 기간](#3-개발-기간)
4. [개발 환경 및 기술 스택](#4-개발-환경-및-기술-스택)
5. [역할 분담](#5-역할-분담)
6. [서비스 정보 구조도](#6-서비스-정보-구조도)
7. [서비스 기능 소개](#7-서비스-기능-소개)
8. [프로젝트 폴더 구조](#8-프로젝트-폴더-구조)
9. [핵심 코드](#9-핵심-코드)
10. [Refactoring 계획](#10-refactoring-계획)
11. [느낀점](#11-느낀점)
</details>

---
## 1.📱 Well-Fit 소개
---
![Well-Fit](https://github.com/FRONTENDSCHOOL7/final-20-Well-Fit/assets/122437649/dcdc2dac-6b25-4cd9-b461-9f3f6af3c7d7)
웰핏(Well-Fit)은 운동과 다이어트에 관심 있는 이들을 위한 SNS 플랫폼으로, 운동 인플루언서와 강사들이 제공하는 다양한 서비스를 구매할 수 있으며 사용자 스스로도 자신의 서비스를 등록해 판매할 기회를 가집니다. 

이 플랫폼에서는 상품 판매 외에도 다른 이용자들과 교류하며 운동 루틴, 식단 정보, 진행 중인 운동 목표 등의 일상을 글이나 사진으로 공유할 수 있습니다. 팔로우 기능을 통해 관심 있는 이들의 게시물을 홈 피드에서 살펴보고, 마음에 드는 콘텐츠에는 좋아요나 댓글을 남겨 소통을 더욱 활발하게 만들 수 있습니다. 

또한, 개인 대 개인 메시지 기능을 통해 특정 사용자와 더 깊은 대화를 나눌 수 있는 공간도 제공됩니다. 초보자부터 운동 마니아까지, 모든 사람이 운동에 대한 열정을 공유하고 소통할 수 있는 웰핏은 운동에 관한 다양한 정보와 동기부여를 제공하는 커뮤니티입니다.


<br>



> ### [🚀 배포 URL](https://well-fit-20.netlify.app/)

```
테스트 계정
ID: wellfit20@test.com
PW: wellfit12!@
```


## 2.🤼 팀원 소개

|FE 신민재|FE 장성우|FE 조예슬|FE 이수현|
|:---:|:---:|:---:|:---:|
|<img alt="민재 프로필" src="https://github.com/FRONTENDSCHOOL7/final-20-Well-Fit/assets/122437649/13c263a9-3679-44f4-b622-3046bb0ea328" width="200" height="200">|<img width="200" height="200" alt="성우프로필" src="https://github.com/FRONTENDSCHOOL7/final-20-Well-Fit/assets/122437649/9a04546a-5cfd-4c27-87a1-43749d874ac5">|<img width="200" height="200" alt="예슬프로필" src="https://github.com/FRONTENDSCHOOL7/final-20-Well-Fit/assets/122437649/76619ee5-3410-4d35-b785-338809470448">|<img width="200" height="200" alt="수현 프로필" src="https://github.com/FRONTENDSCHOOL7/final-20-Well-Fit/assets/122437649/2a0e507c-54f6-48c7-a20b-d7f09445eac7">|
|[🔗GitHub](https://github.com/SMJ426)|[🔗GitHub](https://github.com/swJaNG12)|[🔗GitHub](https://github.com/yeslcho)|[🔗GitHub](https://github.com/Lee99-dev)|
| - GitHub 관리 <br> - 전체적인 플젝 계획 수립 <br> - 회의록 작성  <br> - 리드미 작성 <br> - 배포 <br> - 재롱 떠는 막내(?) | - 전반적인 Api 통신  <br> - 전반적인 계정 생성 및 test 담당 <br> - 팀내 각종 질문 및 상담 전문  <br> - 팀내 장교수(?)| - 전반적인 유효성 검사 담당 <br> - UI 디테일 수정 <br> - 리드미 작성 <br> - 오류 및 예외사항 찾기 마스터 <br> - 분위기 메이커 담당(?) |- 페이지별 마크업 오류 검사 <br> - 아이디어 호수 <br> - 오프라인 만남 총무(?) 담당|
| <img alt="프론트엔드" src="https://img.shields.io/badge/Frontend-brightgreen"><br /><img alt="팀 리더" src="https://img.shields.io/badge/Team%20Leader-yellow"> | <img alt="프론트엔드" src="https://img.shields.io/badge/Frontend-brightgreen"><br /><img alt="테크닉 리더" src="https://img.shields.io/badge/Technique%20Leader-blue"> | <img alt="프론트엔드" src="https://img.shields.io/badge/Frontend-brightgreen"><br /><img alt="디벨롭 리더" src="https://img.shields.io/badge/Development%20Leader-8A2BE2"> | <img alt="프론트엔드" src="https://img.shields.io/badge/Frontend-brightgreen"><br /><img alt="커뮤니케이션 리더" src="https://img.shields.io/badge/Communication%20Leader-orange"> |
  <br>

  
### 😁 팀 목표
 - 열심히 운동하면서 작업하기
 - 건강하게 개발하기


<br>



<details>
  <summary>  🔥우리의 추억(?)🔥</summary>
  <div markdown="1">

  <br>

  
  <img width="254" alt="스크린샷 2023-11-08 오후 5 09 56" src="https://github.com/FRONTENDSCHOOL7/final-20-Well-Fit/assets/122437649/cfd4d059-cce1-462f-ab4a-f433317c1a48"> <br>
😬 이렇게 어색하게 만난게 엊그제 같은데.. <br>

<br>


<img width="261" alt="image" src="https://github.com/FRONTENDSCHOOL7/final-20-Well-Fit/assets/122437649/42eebbbc-4819-4c88-9d56-9fb005903697"> <br>
😩 설상가상으로 다 다른 성향을 가진 우리.. 잘 할 수 있을까? <br>


<br>


<img width="359" alt="image" src="https://github.com/FRONTENDSCHOOL7/final-20-Well-Fit/assets/122437649/aee9082a-bb87-4ca6-bdb1-6725d278bbcc">
<img width="360" alt="영수증" src="https://github.com/FRONTENDSCHOOL7/final-20-Well-Fit/assets/122437649/2de563e0-e3e7-404a-b2da-eb2b56961f49"> <br>
🤤 하지만 식성이 같은 저흰 바로 첫 오프라인 만남을 가졌고! (음식 사진 안찍고 영수증 찍는 우리)<br>


<br>


<img width="693" alt="image" src="https://github.com/FRONTENDSCHOOL7/final-20-Well-Fit/assets/122437649/06cb719a-ea28-4568-8ad5-8d796ec74f4f"> <br>
🤒 실연이 다가와도 격려와 응원하는 마음과 함께 프로젝트를 진행했습니다!
<br>


<br> 저희가 함께 작업한 결과물을 함께 보시죠!

</div>
</details>


<br>


## 3.📆 개발 기간
---
### 2023년 10월 16일 ~ 2023 11월 8일 

<img alt="개발 기간 그래프" src="https://github.com/FRONTENDSCHOOL7/final-20-Well-Fit/assets/122437649/4428df3f-9c0e-47bc-93ba-64460c39cdbf">


|         **주차**          | **내용**                                                                                                                                                  |
| :-----------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   1주차 <br> (10/16 -10/20)    | - 주제 선정 및 계획 수립 <br/> - 기술 스택 및 협업 툴 조사 및 선정 <br/> - 디자인 작업 및 기획 <br/> - 컨벤션 설정                                             |
| 2주차 <br> (10/23 -10/27) | - 디자인 및 마크업 작업 <br /> - 페이지별 기능 역할 분담                                                                                               |
| 3주차 <br> (10/30 -11/03) | 필수 기능 구현 작업 <br /> - 기능 테스트 및 에러 수정                                                                        |
| 4주차 <br> (11/06 -11/08) | - 디자인 및 추가기능 보완 <br /> - 서비스 배포 작업 <br /> - README 작성                                                                                                                                                        |

<br>


## 4.⚙️ 개발 환경 및 기술 스택
---


<details>
<summary>협업 관련 링크</summary>
<div markdown="1">

- [🔗노션링크](https://www.notion.so/20-63d462131a87436ab106cf24cff6c93c?pvs=4) <br>
- [🔗Figma링크](https://www.figma.com/files/project/111509269/Team-project?fuid=1257889962084175927)

</div>
</details>


### 개발환경


- 매일 아침 9시에 디스코드에 접속해서 진행 상황 확인과 추후계획을 세웠습니다.
- 머지할때는 모두 디스코드 화면 공유를 통해 충돌을 방지했습니다.
- 커밋 컨벤션과 코드 컨벤션을 통해서 코드 형식을 통일해, 동시작업을 수월하게 하였습니다.


### 기술 스택

<table>
<tr>
 <td align="center">Front-End</td>
 <td>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>&nbsp 
  <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"/>&nbsp
  <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"/>&nbsp
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>&nbsp
  <img src="https://img.shields.io/badge/styled--Components-db7093?style=for-the-badge&logo=styled-Components&logoColor=black"/>&nbsp 
  <img src="https://img.shields.io/badge/Axios-white?style=for-the-badge&logo=Axios&logoColor=black"/>&nbsp 
 </td>
</tr>
<tr>
 <td align="center">협업</td>
 <td>
    <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"/>&nbsp
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>&nbsp 
    <img src="https://img.shields.io/badge/Notion-5a5d69?style=for-the-badge&logo=Notion&logoColor=white"/>&nbsp
    <img src="https://img.shields.io/badge/Discord-4263f5?style=for-the-badge&logo=Discord&logoColor=white"/>&nbsp 
 </td>
</tr>
<tr>
 <td align="center">디자인</td>
 <td>
    <img src="https://img.shields.io/badge/Figma-d90f42?style=for-the-badge&logo=Figma&logoColor=white"/>&nbsp  
    <img src="https://img.shields.io/badge/Adobe-FF0000?style=for-the-badge&logo=Adobe&logoColor=white"/>&nbsp  
 </td>
</tr>
<tr>
 <td align="center">IDE</td>
 <td>
    <img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white"/>&nbsp
</tr>
<tr>
 <td align="center">컨벤션</td>
 <td>
    <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white"/>&nbsp
</tr>
<tr>
 <td align="center">배포</td>
 <td>
    <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=Netlify&logoColor=white"/>&nbsp
</tr>
</table>


<br>


## 5.🛠️ 역할 분담
---

>### 신민재
#### 🎨 UI
 - 내 프로필 페이지
 - 유저 프로필 페이지
 - 공통 모달 및 공통 헤더
#### 📡 기능
 - 프로필 정보 및 이미지 불러오기
 - 프로필 수정, 상품 등록 페이지 이동
 - 댓글 프로필 이미지 불러오기
 - 팔로잉, 팔로워 목록
 - 앨범형,리스트형 피드 구현
 - 게시글 상세보기
 - 프로필 url 복사, 공유하기


<br>

   
>### 장성우
#### 🎨 UI
 - 홈 피드 페이지
 - 검색 페이지
 - 팔로잉/팔로워 목록 페이지
 - 채팅 리스트 페이지
 - 게시물 상세 페이지
#### 📡 기능
 - 팔로잉, 팔로워 리스트
 - 채팅 리스트 
 - 유저 검색 기능
 - 댓글 작성
 - 좋아요 기능
 - 피드 상세 페이지


<br>

   
>### 조예슬
#### 🎨 UI
 - splash 페이지
 - 404 페이지
 - 로그인 페이지
 - 회원가입 페이지
 - 프로필 설정, 수정 페이지
 - 상품 업로드 페이지
 - 더보기 페이지
 - 푸터
 - 기본 프로필 이미지 작업
#### 📡 기능
 - 로그인, 회원가입, 프로필 설정 및 수정 시 유효성 검사
 - 상품 및 프로필 이미지 유효성 검사 및 최적화
 - API 모듈화
 - 더보기 페이지 날짜 및 요일 기능, To Do List 작성
 - 게시글 업로드 프로필 이미지 불러오기
 - 로그아웃


<br>

   
>### 이수현
#### 🎨 UI
 - 로고 디자인
 - 채팅 룸 페이지
 - 게시글 작성 페이지
#### 📡 기능
 - 게시글 업로드
 - 이미지 1~3장 업로드


<br>



## 6.🗺️ 서비스 정보 구조도
---

<img width="1600" alt="정보구조도" src="https://github.com/FRONTENDSCHOOL7/final-20-Well-Fit/assets/122437649/7b613213-0ceb-4352-a245-57355b0288ce">


<br>



## 7.🔧 서비스 기능 소개

|스플래쉬|로그인|회원가입|
|---|---|---|
|<img width="270" height="570" src="https://github.com/FRONTENDSCHOOL7/final-20-Well-Fit/assets/122437649/5afd2eed-10e3-4c9a-a9aa-fbe4daa76537">|<img width="270" height="570" src="https://github.com/FRONTENDSCHOOL7/final-20-Well-Fit/assets/122437649/b24e6c3f-41da-4c79-9f99-829112f4f5b8">|<img width="270" height="570" src="https://github.com/FRONTENDSCHOOL7/final-20-Well-Fit/assets/122437649/991228dd-042a-40c4-a3a5-dc52dca175d2">|


|회원가입 프로필 설정|계정 검색|팔로잉&팔로워|
|---|---|---|
|<img width="270" height="570" src="https://github.com/FRONTENDSCHOOL7/final-20-Well-Fit/assets/122437649/5cf9c671-cd99-4b02-bbd8-d4e6ae58ecad">|<img width="270" height="570" src="https://github.com/FRONTENDSCHOOL7/final-20-Well-Fit/assets/122437649/5be61739-0dd0-41a6-8c28-67308bdb9e2a">|<img width="270" height="570" src="https://github.com/FRONTENDSCHOOL7/final-20-Well-Fit/assets/122437649/8b340152-b5e3-4ad2-924f-6bde7efae1a9">|


|메인|좋아요|댓글 등록|
|---|---|---|
|<img width="270" height="570" src="https://github.com/FRONTENDSCHOOL7/final-20-Well-Fit/assets/122437649/6912266a-aa31-4bf2-b516-4e8eba3fd6bf">|<img width="270" height="570" src="https://github.com/FRONTENDSCHOOL7/final-20-Well-Fit/assets/122437649/a4241065-494c-4fe0-9c8b-d79879a8194b">|<img width="270" height="570" src="https://github.com/FRONTENDSCHOOL7/final-20-Well-Fit/assets/122437649/23458e8c-b1f1-40b6-b77a-78494559e152">|


|상품 등록|게시글 등록|내 프로필|
|---|---|---|
|<img width="270" height="570" src="https://github.com/FRONTENDSCHOOL7/final-20-Well-Fit/assets/122437649/c9bb9883-c6dd-40b1-9b7b-5fe1100281ae">|<img width="270" height="570" src="https://github.com/FRONTENDSCHOOL7/final-20-Well-Fit/assets/122437649/2c0c8d22-1344-45c1-993a-3c02916f34ea">|<img width="270" height="570" src="https://github.com/FRONTENDSCHOOL7/final-20-Well-Fit/assets/122437649/20fae851-3d27-4900-8358-90a5645552d2">|


|유저 프로필|로그아웃|더보기(캘린더+할일)|
|---|---|---|
|<img width="270" height="570" src="https://github.com/FRONTENDSCHOOL7/final-20-Well-Fit/assets/122437649/0308bd1d-cda3-4c6f-9891-c8b8c2e619fb">|<img width="270" height="570" src="https://github.com/FRONTENDSCHOOL7/final-20-Well-Fit/assets/122437649/e27b4d56-e9f0-419e-bdbe-2e431aa60317">|<img width="270" height="570" src="https://github.com/FRONTENDSCHOOL7/final-20-Well-Fit/assets/122437649/a586aa3c-74a3-4bb4-86f8-14a7258d75bd">|



<br>



## 8.📂 프로젝트 폴더 구조

 ```
📦wellfit-react
 ┣ 📂node_modules
 ┣ 📂public
 ┣ 📂src
 ┃ ┣ 📂Components
 ┃ ┃ ┣ 📂Button
 ┃ ┃ ┣ 📂Follow
 ┃ ┃ ┣ 📂Home
 ┃ ┃ ┣ 📂Input
 ┃ ┃ ┣ 📂More
 ┃ ┃ ┣ 📂Post
 ┃ ┃ ┣ 📂Profile
 ┃ ┃ ┣ 📂Search
 ┃ ┃ ┗ 📂common
 ┃ ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┣ 📂Loading
 ┃ ┃ ┃ ┗ 📂Modal
 ┃ ┣ 📂Contexts
 ┃ ┣ 📂Pages
 ┃ ┃ ┣ 📂404
 ┃ ┃ ┣ 📂Chatting
 ┃ ┃ ┣ 📂Follow
 ┃ ┃ ┣ 📂Home
 ┃ ┃ ┣ 📂Login
 ┃ ┃ ┣ 📂More
 ┃ ┃ ┣ 📂Post
 ┃ ┃ ┣ 📂Profile
 ┃ ┃ ┣ 📂Search
 ┃ ┃ ┣ 📂Signup
 ┃ ┃ ┗ 📂Splash
 ┃ ┣ 📂Router
 ┃ ┣ 📂api
 ┃ ┣ 📂images
 ┃ ┣ 📂resetcss
 ┃ ┣ 📜App.js
 ┃ ┗ 📜index.js
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜package-lock.json
 ┗ 📜package.json
```


<br>



## 9.⭐️ 핵심 코드
- 있는 사람만 작성( 제일 후순위)


<br>



## 10.♻️ Refactoring 계획
<details><summary>반응형 작업
</summary>
- 다양한 기기가 많아진 만큼 다양한 사용자들이 편하게 이용할 수 있게 만들고 싶습니다.<br /> 시간과 역량이 조금 부족해 마크업 작업 시, 고정값으로 작업한 것이 많이 아쉬웠습니다.<br />반응형을 고려해서 우선 크게 태플릿부터 시작해서 pc까지 확장해 볼 예정입니다.
</details>
<details><summary>선택기능과 부가적인 기능 추가
</summary>
- 필수기능부터 하는 것이 목표로 잡아 선택기능 중 기능 구현을 못한 것이 있습니다. 선택기능을 구현을 하여 완성도를 더 높일 예정입니다.<br />구체적으로 좋아요, 팔로우, 언팔로우기능과 같이 선택기능을 구현할 예정입니다. 선택 기능을 하면서 홈페이지 무한 스크롤 구현하기와 검색기능 중 불필요한 API 요청 줄여볼 예정입니다.
- 저희가 추가적으로 넣은 더보기 페이지에서는 날짜와 To Do List만 구현을 해서 기능을 더 구현할 예정입니다.< br/>식약처 오픈 API를 사용하여 식단별 칼로리 계산하는 기능을 넣고 유튜브 API 사용하여 원한는 운동부위나 음악을 선택하면 관련된 영상을 보여주는 기능도 넣을 예정입니다. 또한, 오운완 커뮤니티를 만들어 볼 예정입니다.< br/>
</details>
<details><summary>UI 수정
</summary>
- 페이지 전반적으로 수정할 부분이 있어 리팩토링 작업을 하게 되면 우선 순위로 작업을 할 것입니다.<br />우선 홈페이지, 피드 상세페이지, 게시글 등록페이지, 채팅방 페이지의 구조 수정을 할 예정입니다. 모달창과 페이지간 이동에서도 수정해야할 부분이 있어 이것도 추가적으로 수정을 할 입니다.<br />또한 동일한 스타일로 사용할 수 있고 컴포넌트화 할 수 있는 것들은 정리를 해서 코드를 깔끔하게 볼 수 있도록 할 예정입니다.
</details>

<br>


## 11.🗣️ 느낀점
#### 신민재
 - 팀장으로서 진행하는 프로젝트는 처음이라서 처음엔 뭐부터 해야할지 막막하고 부담감이 있었지만, 수업 때 배웠던 기술들을 바탕으로 직면한 문제들을 하나하나 해결하다 보니 수월하게 작업을 할 수 있었던 것 같습니다. 그리고 좋은 팀원들을 만나 서로가 맡은 부분을 하나 같이 다 책임감 있게 작업했기에 프로젝트를 무사히 마칠 수 있었던 것 같습니다. 프로젝트를 시작할 때부터 필수 기능만 구현하고 하고 싶은 추가 기능은 추후에 리팩토링 과정을 밟기로 했기에, 리팩토링을 통해  우리의 프로젝트를 더욱더 고도화하고 싶다는 생각이 들었습니다. 이번 프로젝트때 적용하지 못한 기술들은  추후 다른 프로젝트와 리팩토링을 통해 적용해보고 싶습니다.
#### 장성우
 - 프로젝트를 진행하면서 무작정 개발을 시작하는 것이 중요한게 아니라 프로젝트 팀원들 간의 컨벤션, 프로젝트 구조, 컴포넌트 설계를 정해서 시작했다면 좀 더 원활하게 진행됐을 거라는 생각이 많이 들었습니다. 이러한 경험들이 다른 프로젝트를 진행할 떄 도움이 될거라고 생각했습니다.
처음 진행하는 협업 프로젝트여서 처음에는 부담과 긴장을 많이 했지만, 좋은 팀원들을 만나 프로젝트 진행이 원활했던 것 같습니다. 내가 개발한 부분과 다른 팀원이 개발한 부분에서 이슈가 발생하면 모든 팀원이 같이 고민하고 논의하는 팀 문화를 통해 프로젝트를 혼자하는 것이 아니라 같이 하는 느낌을 받았습니다. 앞으로도 리펙토링을 통해 부족했던 부분을 채워가고 싶습니다.
#### 조예슬
 - 처음 프로젝트를 시작하기 전, 팀원들에게 하나라도 도움이 되어야겠다는 생각으로 시작을 했습니다. 덕분에 열심히 찾아보고 공부하며 많은 것을 배울 수 있는 기회가 되었습니다. 혼자 하는 프로젝트가 아닌 팀원들과 함께 하는 프로젝트인 만큼 팀원들과 소통하는 것이 중요하다는 것을 알게 되었습니다. 함께 고민하고, 해결하고, 공부하고, 배우며 같이 성장해 나간다는 느낌을 받아 저 또한 더 성장할 수 있었습니다. 이번 첫 프로젝트를 통해 협업의 기술에 대해서도 많이 배웠고, 이러한 경험은 앞으로의 리팩토링 작업이나 새로운 프로젝트에 임할 때 훨씬 더 효과적으로 접근할 수 있는 토대를 마련해주었습니다. 이제 앞으로 나아갈 길에 조금 더 자신감을 가지고, 더 나은 성과를 이루기 위해 노력하고 싶습니다.
#### 이수현
 - 프로젝트를 개발하면서 처음부터 구조를 잘 짜면 좋았겠다는 생각이 많이 들었습니다. 마크업 과정에서부터 구조를 제대로 짜지 않아서 CSS를 고칠 때 하나를 고치면 다른 문제가 생기고 그 문제를 고쳐도 또 다른 문제가 생기는 일들이 반복됐습니다. CSS가 이렇게 복잡하다는 걸 프로젝트를 하면서 느낀 것 같습니다. 그리고 여러모로 개발 능력이 많이 부족해서 UI를 만들고 기능을 구현하는 데 많은 어려움을 겪었고, 프론트엔드 개발자가 되기 위해선 훨씬 더 많이 공부해야겠다는 생각이 들었습니다.
