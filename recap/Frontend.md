# Frontend

## Api 엔드포인트 정의 (satisfies 사용)

> Zod 관련 타입가드 서치하다가 처음보는 방식을 배우게 됐음.

```ts
type ApiEndpoints = {
  "/users": { id: number; name: string };
  "/posts": { title: string; content: string };
};

const api = {
  "/users": (data: { id: number; name: string }) => {},
  "/posts": (data: { title: string; content: string }) => {},
} satisfies {
  [K in keyof ApiEndpoints]: (data: ApiEndpoints[K]) => void;
};

// 타입 체크와 자동완성이 정확하게 동작
api["/users"]({ id: 1, name: "John" }); // ✅ 정상
api["/posts"]({ title: "Hello", content: "World" }); // ✅ 정상
api["/invalid"]; // ❌ 에러: 존재하지 않는 엔드포인트
```

- 장점
  - 타입 체크와 자동완성이 정확하게 동작
  - 타입 체크 오류 발생 시 컴파일 오류로 표시됨
- 단점
  - 모든 엔드포인트를 정의해야 함
  - 엔드포인트 추가 시 인터페이스 수정 필요
  - 타입 추가 시 인터페이스 수정 필요
