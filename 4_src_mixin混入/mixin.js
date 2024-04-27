export const mixin = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
    // 挂在完毕后就执行
    mounted() {
        console.log("Hello World")
    },
}

export const shareData = {
    data() {
        return {
            x: 100,
            y: 200
        }
    }
}