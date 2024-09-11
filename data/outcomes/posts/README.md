# 사용법

## 게시물 추가는 posts 디렉토리에 마크다운 파일을 추가하면 됩니다.
- application : 활용성과 관련된 내용
- research : 연구성과와 관련된 내용
> 해당 범주는 outcomes/categories.json에 정의되어 있습니다.
> view 는 두가지로 grid와 research가 있습니다.

## 파일의 첫 헤딩은 글의 제목으로 사용됩니다.
- 제목 이하 모든 내용은 콘텐츠로 렌더링됩니다.

## 파일의 첫 이미지는 썸네일로 사용됩니다.

## 게시물 추가 후 index.json에 파일명을 추가해야합니다.
- 파일리스트를 불러와 게시물 리스트를 렌더링하기 위해 사용됩니다.
- 실제 존재하는 파일명과 다르면 무시되니 유의해주세요.
- 배열에 존재하는 순서대로 게시물이 렌더링됩니다.
```JSON
//example
{
  "posts": [
    "first-post.md",
    "second-post.md",
    "some-directory/some-post.md"
    // 디렉토리명과 같이 작성해도 읽어올 수 있습니다.
    // 상대경로의 시작은 data/outcomes/posts 디렉토리입니다.
  ]
}
```

## VIEW
- grid : 썸네일과 제목만 보여줍니다.
- research : 제목과 저자를 보여줍니다. (저자는 마크다운 파일에 주석으로 입력합니다. ex. <!-- author: author name -->)