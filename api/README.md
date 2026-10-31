# MemoBase API

FastAPI 后端，负责对话与 Skill 配置、RAG 检索、长期记忆、模型接入及异步任务调度。

## 启动

先按[根目录说明](../README.md)启动存储、设置 api/.env 中的密钥与数据库连接，然后在本目录执行：

```bash
uv sync
uv run alembic upgrade head
uv run python run.py
```

健康检查为 /api/health。文档解析、记忆萃取与研究任务另需启动 Celery worker；定时功能另需一个 beat 进程。

## 目录

- app/controllers：HTTP 边界与路由。
- app/services：应用业务服务。
- app/repositories：数据访问。
- app/core：Agent、检索、记忆和模型基础能力。
- app/tasks：异步任务。
- migrations：数据库迁移。
- eval：独立配置的离线评测，详见[评测说明](eval/README.md)。
