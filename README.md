# K3sAutoScaling

## Badges

<!-- Badges -->
[![CircleCI](https://circleci.com/gh/rhea-so/K3sAutoScaling/tree/main.svg?style=svg)](https://circleci.com/gh/rhea-so/K3sAutoScaling/tree/main)
[![License](https://img.shields.io/github/license/rhea-so/K3sAutoScaling)](https://raw.githubusercontent.com/rhea-so/K3sAutoScaling/main/LICENSE)
[![Issues](https://img.shields.io/github/issues/rhea-so/K3sAutoScaling)](https://github.com/rhea-so/K3sAutoScaling/issues)
[![Pull Request](https://img.shields.io/github/issues-pr/rhea-so/K3sAutoScaling)](https://github.com/rhea-so/K3sAutoScaling/pulls)
[![Stars](https://img.shields.io/github/stars/rhea-so/K3sAutoScaling)](https://github.com/rhea-so/K3sAutoScaling)

## Usage

[GitHub Template](https://velog.io/@bgm537/Github%EC%9D%98-%EC%83%88%EB%A1%9C%EC%9A%B4-%EA%B8%B0%EB%8A%A5-Template-repository-%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90-fsjwpt0x00)

## Configuration & Setup

### Project Cloning

```sh
git clone https://github.com/rhea-so/K3sAutoScaling
cd K3sAutoScaling
npm i
```

## Build 

```sh
tsc
```

## Test

```sh
npm test
```

### Get Test Coverage

```sh
npm run coverage
```

### Artillery

```sh
artillery quick --duration 60 --rate 10 -n 20 http://192.168.0.36:3000/test.html
```

오토스케일링이 어떻게 이루어지는지 대략적인 계산은 다음처럼 이뤄집니다.

```javascript
TargetNumOfPods = ceil(sum(CurrentPodsCPUUtilization) / Target)
```

> [What is Mili CPU?](https://stackoverflow.com/questions/53255956/what-is-the-meaning-of-cpu-and-core-in-kubernetes)

오토스케일링이 이뤄질때의 기준이 되는 자원 사용량은 현재 시점의 데이터만을 사용합니다.  
그러다 보니 오토스케일링이 이뤄지고 나서 실제로 포드가 늘어나고 있긴 하지만 아직 포드가 실행되고 있는 도중에 다시 오토스케일링을 통해서 포드를 늘리라는 요청이 발생할 수도 있습니다.  
그래서 일단 한번 오토스케일링이 일어나면 일정시간동안은 추가로 오토스케일링이 일어나지 않게 쿨다운 시간을 둘 수 있습니다.  
포드가 늘어날때의 기본 쿨다운 시간은 3분이고 `--horizontal-pod-autoscaler-downscale-delay` 옵션을 통해 조정할 수 있습니다.  
포드가 줄어들때의 기본 쿨다운 시간은 5분이고 `--horizontal-pod-autoscaler-downscale-delay` 옵션을 통해 조정할 수 있습니다.

> [https://arisu1000.tistory.com/27858](https://arisu1000.tistory.com/27858)  
> [https://medium.com/dtevangelist/k8s-kubernetes%EC%9D%98-hpa%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EC%98%A4%ED%86%A0%EC%8A%A4%EC%BC%80%EC%9D%BC%EB%A7%81-auto-scaling-2fc6aca61c26](https://medium.com/dtevangelist/k8s-kubernetes%EC%9D%98-hpa%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EC%98%A4%ED%86%A0%EC%8A%A4%EC%BC%80%EC%9D%BC%EB%A7%81-auto-scaling-2fc6aca61c26)

## Documentation

* [프로젝트 변경 사항](https://github.com/rhea-so/K3sAutoScaling/blob/main/CHANGELOG.md)
* [프로젝트 발전 방향](https://github.com/rhea-so/K3sAutoScaling/blob/main/ROADMAP.md)

## Contribute

부탁드립니다. 이 프로젝트는 여러분의 기여를 바라고 있습니다. 기여를 해주세요.  
기여를 하는 법은 크게 어렵지 않습니다!!

* [당장 기여하는 방법 알아보기](https://github.com/rhea-so/K3sAutoScaling/blob/main/CONTRIBUTING.md)
* [기여 해주신 고마운 분들](https://github.com/rhea-so/K3sAutoScaling/blob/main/CONTRIBUTORS.md)

## Questions

* GitHub - [open issue](https://github.com/rhea-so/K3sAutoScaling/issues)
* Email - [jeonghyeon.rhea@gmail.com](mailto:jeonghyeon.rhea@gmail.com?subject=[GitHub]%20Project%20Moon%20Community-Question)

### License

[GPL-3.0 License](https://github.com/rhea-so/K3sAutoScaling/blob/main/LICENSE)
