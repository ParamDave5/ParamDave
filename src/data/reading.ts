export type ReadingPaper = {
  title: string;
  authors: string;
  year: string;
  venue: string;
  url: string;
  note: string;
  connection: string;
};

export type ReadingGroup = {
  id: string;
  name: string;
  description: string;
  papers: ReadingPaper[];
};

export const readingGroups: ReadingGroup[] = [
  {
    id: 'reading-lidar',
    name: 'LiDAR segmentation',
    description:
      'Architectures and optimization ideas that shaped how I think about large, irregular, and severely imbalanced point clouds.',
    papers: [
      {
        title: 'RandLA-Net: Efficient Semantic Segmentation of Large-Scale Point Clouds',
        authors: 'Hu et al.',
        year: '2020',
        venue: 'CVPR',
        url: 'https://openaccess.thecvf.com/content_CVPR_2020/html/Hu_RandLA-Net_Efficient_Semantic_Segmentation_of_Large-Scale_Point_Clouds_CVPR_2020_paper.html',
        note:
          'RandLA-Net made large-scale point-cloud learning practical by pairing random sampling with local feature aggregation instead of relying on expensive point selection.',
        connection:
          'A foundation for my work on outdoor utility point clouds, where scale and preservation of rare geometric structures both matter.',
      },
      {
        title: 'Focal Loss for Dense Object Detection',
        authors: 'Lin et al.',
        year: '2017',
        venue: 'ICCV',
        url: 'https://arxiv.org/abs/1708.02002',
        note:
          'The paper reframes class imbalance as an optimization problem: easy examples should not dominate the gradient simply because they are numerous.',
        connection:
          'Influenced the loss design for improving minority-class learning without destabilizing majority-class performance.',
      },
      {
        title: 'PointNet: Deep Learning on Point Sets for 3D Classification and Segmentation',
        authors: 'Qi et al.',
        year: '2017',
        venue: 'CVPR',
        url: 'https://arxiv.org/abs/1612.00593',
        note:
          'PointNet is the clean foundational argument for learning directly from unordered point sets while respecting permutation invariance.',
        connection:
          'Useful for understanding which geometric assumptions later point-cloud architectures add, and what those additions cost.',
      },
      {
        title: 'A ConvNet for the 2020s',
        authors: 'Liu et al.',
        year: '2022',
        venue: 'CVPR',
        url: 'https://openaccess.thecvf.com/content/CVPR2022/html/Liu_A_ConvNet_for_the_2020s_CVPR_2022_paper.html',
        note:
          'ConvNeXt shows how much can be gained by modernizing architecture and training choices without discarding the useful inductive bias of convolution.',
        connection:
          'A useful design reference when bringing modern convolutional blocks and training recipes into point-cloud segmentation.',
      },
    ],
  },
  {
    id: 'reading-gaussian-splatting',
    name: 'Reconstruction & Gaussian Splatting',
    description:
      'The geometry, scene representation, and implementation work behind a capture-to-real-time-rendering pipeline.',
    papers: [
      {
        title: 'Structure-from-Motion Revisited',
        authors: 'Schönberger and Frahm',
        year: '2016',
        venue: 'CVPR',
        url: 'https://doi.org/10.1109/CVPR.2016.445',
        note:
          'COLMAP is a reminder that robust reconstruction depends on careful system design around correspondence, geometry, registration, and failure handling.',
        connection:
          'The geometric foundation of my production reconstruction work and the camera poses used to initialize Gaussian Splatting.',
      },
      {
        title: '3D Gaussian Splatting for Real-Time Radiance Field Rendering',
        authors: 'Kerbl et al.',
        year: '2023',
        venue: 'SIGGRAPH',
        url: 'https://arxiv.org/abs/2308.04079',
        note:
          'The paper finds a productive middle ground between continuous radiance fields and explicit representations through optimized anisotropic Gaussians and a fast rasterizer.',
        connection:
          'Motivated the shift from slow reconstruction outputs toward photorealistic rendering at interactive frame rates.',
      },
      {
        title: 'gsplat: An Open-Source Library for Gaussian Splatting',
        authors: 'Ye et al.',
        year: '2025',
        venue: 'JMLR',
        url: 'https://www.jmlr.org/papers/v26/24-1476.html',
        note:
          'gsplat turns a fast-moving research idea into a modular, memory-conscious implementation that is easier to extend and benchmark.',
        connection:
          'Relevant to the engineering side of making Gaussian Splatting reproducible, efficient, and usable beyond a single research codebase.',
      },
    ],
  },
  {
    id: 'reading-post-training',
    name: 'Post-training',
    description:
      'The progression from a practical group-relative baseline to stable large-scale RL and perception-aware multimodal reasoning.',
    papers: [
      {
        title: 'DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models',
        authors: 'Shao et al.',
        year: '2024',
        venue: 'arXiv',
        url: 'https://arxiv.org/abs/2402.03300',
        note:
          'This paper introduced GRPO, replacing the learned critic used by PPO with group-relative comparisons and making reasoning-oriented RL more memory efficient.',
        connection:
          'The baseline for my Qwen3-VL-8B post-training experiments before adding DAPO and perception-aware objectives.',
      },
      {
        title: 'DAPO: An Open-Source LLM Reinforcement Learning System at Scale',
        authors: 'Yu et al.',
        year: '2025',
        venue: 'NeurIPS',
        url: 'https://arxiv.org/abs/2503.14476',
        note:
          'DAPO shows that clipping, sampling, token-level loss, and overlong-response handling are not implementation details; they determine whether RL training remains useful and stable.',
        connection:
          'Informed the training setup I used after establishing a vanilla GRPO baseline.',
      },
      {
        title: 'Perception-Aware Policy Optimization for Multimodal Reasoning',
        authors: 'Wang et al.',
        year: '2026',
        venue: 'ICLR',
        url: 'https://arxiv.org/abs/2507.06448',
        note:
          'PAPO separates failures of perception from failures of reasoning and adds an implicit perception objective using original and corrupted visual inputs.',
        connection:
          'Directly influenced my corruption augmentation and the PAPO objective added to a DAPO-based medical VLM training run.',
      },
    ],
  },
];
