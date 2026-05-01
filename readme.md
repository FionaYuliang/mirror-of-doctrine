# 目标站点



# 需求描述

## 目标

将 https://doctrine-of-signatures.net/zh/home/(中文) 和  https://doctrine-of-signatures.net/zh/home/(英文) 对应的页面复制下来, 使其能发布到任意 wordpress 站点. 站点域名和路径可以是任意的, 例如换成 a.com/show/zh, 或者 b.com/display/tg, 但期望其打开效果和原始站点一模一样

最终会交付一个文件夹, 里面为一系列 html 文件, 部署到服务器, 打开路径后可以直接访问, 且能正常跳转

## 已确认事项

1. 页面仅极少部分写死了doctrine-of-signatures.net域名, 且均与加载 js/css 无关
2. 页面存在写死路径的情况,例如以/开头, 这会导致克隆下的资源无法被迁移到其他父路径
3. 已通过该命令, 将所有静态资源及 html, 下载到了`resource/doctrine-of-signatures.net` 目录中
    ```
    wget --mirror --convert-links --adjust-extension --page-requisites --no-parent --directory-prefix=zh/home https://doctrine-of-signatures.net/zh/home/
    ```

## 待确认事项

1.  如何进行该工作
2.  使用 markdown 将工作流程绘制出来


# 执行路径

```mermaid
graph LR
    %% 定义样式
    classDef source fill:#f9f9f9,stroke:#333,stroke-dasharray: 5 5;
    classDef process fill:#fff3e0,stroke:#ef6c00,stroke-width:2px;
    classDef target fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px;

    %% 原始环境
    subgraph Origin [原始站点: doctrine-of-signatures.net]
        direction TB
        S1[HTML 源码]
        S2[静态资源 /wp-content/...]
        S3[绝对路径跳转 /zh/home]
    end

    %% 处理层
    subgraph Transformation [核心重构工序]
        direction TB
        T1{路径去耦合}
        T2[注入动态 Base 脚本]
        T3[正则替换绝对路径]
        
        T1 --> T2 & T3
    end

    %% 目标环境
    subgraph WP_Site [目标 WordPress 站点: any-domain.com]
        direction TB
        P1[WP 根目录]
        subgraph SubDir [自定义路径: /show/zh/]
            D1[index.html]
            D2[assets/ 资源文件夹]
        end
        P1 --> SubDir
    end

    %% 连接
    Origin -- "wget 镜像抓取" --> Transformation
    Transformation -- "打包交付 (相对路径化)" --> SubDir

    %% 注释说明
    note1[修复后: 无论部署在哪个文件夹<br/>资源都能自动找回正确位置]
    SubDir -.-> note1
```