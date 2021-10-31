kubectl delete hpa tinychat-hpa
kubectl delete deployments tinychat
kubectl delete service tinychat
docker rmi -f tinychat:v1.0.0
