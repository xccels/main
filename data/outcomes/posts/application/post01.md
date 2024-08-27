
# 반도체 Fab 내부 유동시뮬레이션
## In-house CFD 코드의 multi-node GPU 병렬화  

```
활용 모듈 : PaScaL_TDMA
활용 기관 : 삼성전자 SAIT
활용 담당 : 김기하 책임연구원
```

*****

![유동](/data/outcomes/posts/application/images/fab_flow.png)


## 연구 요약 

- 반도체 Fab은 미세 제조과정 중 결함을 일으킬 수 있는 공기 중 오염분진 통제가 주요함
- 먼지 센서의 정보로 오염발생원을 추적하는 역 문제(inverse problem) 모델 개발 목표
- 오염발생원 추적 모델 개발을 위해 반도체 Fab 내부 전체에 대한 고해상도 유동 데이터 생성 필요
- In-house CFD 코드 “LICA” (LES+IB method) 의 multi node GPU 병렬화로 대규모 반도체 Fab 내부의 고해상도 유동시뮬레이션을 가능하게 함


## 수치 라이브러리 기여 부분 

- 분산 메모리 시스템에 특화된 PaScaL_TDMA 알고리즘 덕분에 대규모 반도체 Fab 내부 유동을 고해상 계산 가능
- 반도체 Fab의 한 zone 규모: 81-43-19m(L-W-H), 𝑅𝑒=66700
- 해상도: 4096 x 2176 x 960(8.5 billion DoF, 2cm 분해 해상도)
- PaScaL_TDMA 알고리즘의 높은 병렬 Scaling 덕분에 공조 순환 계산을 128 GPU 으로 1-day simulation 이 가능함(21 시간 소요)


## 관련 성과
- 개발내용으로 SC24 conference paper 제출. (심사중) GPU-Enabled LICA Fluid Dynamic Solver for Large-Scale Semiconductor Fabrication Plant Flow Simulation. 


## 활용 컴퓨터 시스템
### 사용 시스템
- 삼성전자 슈퍼컴퓨터 SSC-21 (APOLLO 6500 GEN10 PLUS, AMD EPYC 7543 32C 2.8GHZ, NVIDIA A100 80GB​, INFINIBAND HDR200)
### 사용 규모
- NVIDIA A100 GPU 128장 (16노드)
