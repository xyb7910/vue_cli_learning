<template>
    <!--隐式类型转换-->
  <div class="todo-footer" v-show="total">
    <label>
      <!--这里也可用v-model来替代，此时不需要计算属性了-->
<!--      <input type="checkbox" :checked="isAll" @change="checkAll"/>-->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
       <span>已完成{{ doneTotal }}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
    name:'MyFooter',
    props: ['todos', 'checkAllTodo', 'clearAllDoneTodo'],
    computed: {
        total() {
            return this.todos.length;
        },
        doneTotal() {
            return this.todos.reduce((todoTotal, todo) => {
                return todoTotal + todo.done;
            }, 0);
        },
        isAll: {
            get() {
                return this.total === this.doneTotal && this.doneTotal > 0; // //计算属性可以通过其他的计算属性接着进行计算得到结果
            },
            set(value) {
                this.checkAllTodo(value);
            }
        }
    },
    methods: {
        clearAll() {
            this.clearAllDoneTodo();
        }
    }

}

</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>