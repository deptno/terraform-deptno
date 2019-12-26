# terraform-deptno

구조
```shell script
.
├── layers # lambda layer 관리
└── state # backend s3 의 생성 용도
└── test # 자체 테스트를 위한 인프라와 서버리스 사용 예제
```

`/state`
가장 먼저 생성되며 여기서 다른 테라폼들의 `backend s3` 를 제공하는 역할을 한다.

`/layers`
계정에서 사용되는 공용 레이어를 생성한다.
현재 `puppeteer` 사용을 위한 `chrome`, 거기서 사용할 폰트 레이어들이 존재한다.

`/test`
생성한 레이어등을 사용하여 실제로 동작하는지 서버리스를 배포하고 테스트한다.
또한 관련 인프라를 배포한다.

