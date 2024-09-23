# Robust and accurate Roe-type Riemann solver with compact stencil: Rotated-RoeM scheme

<!-- author: Seongyu Choi, Donguk Kim, Jaehyong Park, Jin Seok Park-->

Seongyu Choi, Donguk Kim, Jaehyong Park, Jin Seok Park

Department of Aerospace Engineering, Inha University, 36 Gaetbeol-ro, Incheon, 21999, Republic of Korea

### Abstract
In this study, we aim to develop a robust and accurate Riemann solver to resolve strong shock waves with compact stencil information by applying the rotated hybrid concept to the RoeM scheme. The original RoeM scheme offers good robustness from the perspective of avoiding shock instability, also called the carbuncle phenomenon, in hypersonic flows by introducing Mach-number-based functions. These functions rely on multi-dimensional shock discontinuity sensing terms to capture grid-aligned shock waves, thus necessitating sharing of values of cells adjacent to each vertex. Consequently, constructing a data structure that can handle such a wide stencil is necessary, particularly for implementations on unstructured grids. Moreover, communication of this stencil information on parallel computation can increase computational costs.

To overcome these complexities, the rotated hybrid concept is applied to the RoeM scheme, to replace the multi-dimensional terms while still resolving the grid-aligned shock instability. In addition, a Mach-number-based weighting function is introduced to distinguish between the flow around the boundary layer and the onset of shock instability. The damping characteristic of the proposed scheme is compared to that of the original RoeM scheme by conducting a linear perturbation analysis. The findings reveal that the proposed scheme effectively controls spurious oscillations across strong shock waves. Numerous test cases are presented to demonstrate the robustness and accuracy of the proposed approach. Notably, the proposed scheme successfully resolves thermal boundary layers and accurately predicts the heat transfer rate around stagnation points in hypersonic flows.

#### Journal of Computational Physics, Vol. 505, 112913, 2024. [[Link]](https://doi.org/10.1016/j.jcp.2024.112913)
