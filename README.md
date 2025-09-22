# Galaxy-theme  
# 声明: 主题配置有些借鉴xingwangzhe，在此感谢

## 项目结构  
<img src="src/images/profile.png" width="400" height="600">  

```
Galaxy-theme
       - src/
           ├── assets/
           ├── components/        # 组件
           ├── content/
                     ├── posts/   # 博客文章
                     └── other/
           ├── images/
                     ├── profile.png
           ├── layouts/
           ├── pages/
                     ├── en/
                     └── index.astro
       -  astro.config.mjs         # Astro 配置文件
       -  _galaxy.yml              # 主题默认配置文件
       -  package.json             # 项目依赖和脚本
       -  tsconfig.json            # TypeScript 配置
       -  README.md                # 项目文档
```
##  Astro 项目配置
### Astro 项目细节
_config.yml 是用户自定义的配置文件, 可以覆盖主题的默认配置文件 _galaxy.yml, 但主题的默认配置文件 _galaxy.yml 不要动  
创建 Astro 项目时不会直接生成主题的默认配置文件 _galaxy.yml 和 _config.yml 文件, 需要自己手动创建。我没有建 _config.yml 文件, 另外, _galaxy.yml需要替换为自己的文件名
