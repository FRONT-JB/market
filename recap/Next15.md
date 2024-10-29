# Next 15

## Layout

- `layout.tsx` 에서 설정하는 `localFont`는 성능 최적화, 로딩 성능 향상, css 변수를 통한 쉬운 스타일링 적용, 보안과 안정성, 비용 절감을 위해 사용된다.
  - 프로젝트 내에 실제 폰트파일이 있어야하고 불러올 폰트 웨이트를 지정할 수 있다.

## Server Actions

- Server Action 사용시 input을 핸들링 하는 경우 name 속성값을 전달해서 사용해야 한다.
  - name값을 기준으로 값을 가져올 수 있다.
- `useFormStatus`를 사용해 폼 상태를 가져올 수 있다.
  - `pending` 값으로 상태를 알 수 있는데 form 태그의 내부 자식컴포넌트에서 사용해야 한다.
  - 상태에 따라 UI가 변하는 컴포넌트를 구성한 경우 자식 컴포넌트로 구성해 `use client`를 사용해서 렌더링시켜야 한다.
- 동적인 UI를 표현하기 위해 `useActionState`를 사용할 수 있다.
  - `useActionState`를 사용하는 경우 `use client`를 사용해야 한다.
    - 페이지에서 server action("use server"를 사용한 함수)을 사용한 경우 다른 파일에 작성해서 불러와 사용할 수 있다.
  - `useActionState`는 이전 상태와 현재 상태를 받아와 동적인 UI를 표현할 수 있다.
  - 초기값을 설정할 수 있고 초기값은 초기 상태로 사용된다.
