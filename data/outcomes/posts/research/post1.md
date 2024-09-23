# Multi-GPU-based real-time large-eddy simulations for urban microclimate

<!-- author: Mingyu Yang, Geunwoo Oh, Tiantian Xu, Jungwoo Kim, Ji-Hoon Kang, Jung-Il Choi-->

Mingyu Yang<sup>a</sup>, Geunwoo Oh<sup>a</sup>, Tiantian Xu<sup>a</sup>, Jungwoo Kim<sup>a</sup>, Ji-Hoon Kang<sup>b</sup>, Jung-Il Choi<sup>a,*</sup>

<sup>a</sup> School of Mathematics and Computing (Computational Science and Engineering), Yonsei University, Seoul 03722, Republic of Korea
<sup>b</sup> Division of National Supercomputing, Korea Institute of Science and Technology Information, Daejeon 34141, Republic of Korea

### Abstract
This study presents an innovative real-time urban microclimate simulation strategy using a large-eddy simulation (LES) solver deployed on a multi-GPU architecture. The present LES solver is developed using a monolithic projection-based method with staggered time discretization, ensuring efficient computation and a high CFL number. It is hosted on a multi-GPU platform using CUDA Fortran and CUDA-aware MPI, which enhances its performance. To capture the complexity of urban geometries, we utilized a building-resolved, wall-modeled LES augmented by an immersed boundary method. First, we validated the results in an isolated building by comparing them with wind tunnel profiles. Next, we evaluated the developed LES solver using an idealized street array. A set of evaluation metrics, namely FAC2 and hit rate, was employed to determine the optimal grid configuration that produces physically valid results. Moreover, we proposed a real-time indicator that provides insight into the interplay among grid resolution, simulation domain size, and the number of GPUs. This facilitates feasibility assessments for real-time simulations. The performance of the LES solver was further tested using real urban geometry, conducting simulations over an area of 10.49 in Seoul, with a grid resolution of 4 m. The simulation results efficiently highlighted variations in wind patterns with altitude, demonstrating its potential to provide useful wind information for pedestrian-level wind comfort assessment and urban air mobility.

#### Building and Environment, Vol.245, 110856, 2023. [[Link]](https://doi.org/10.1016/j.buildenv.2023.110856)
