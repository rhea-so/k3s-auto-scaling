docker build . -t tinychat:v1.0.0
kubectl apply -f deployments.yaml
kubectl apply -f services.yaml
kubectl apply -f horizontal_pod_autoscaler.yaml
