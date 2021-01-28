<template>
    <div class="foods-wrap">
        <h2>Foods</h2>
        <div class="foods">
            <ul class="foods-list">
                <li v-for='(food, index) in foods.hints' v-bind:key="index">
                    <img :src="food.food.image" class="food-images"/>
                    <p>{{foods.text}}</p>
                    <input type="button" value="Add to list" @click="addToCalorieList(index)"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Foods',
    props : ['foods'],
    methods : {
        addToCalorieList(index){
            this.$emit('handleAdd', index);
        }
    }
}
</script>

<style>
*{
    box-sizing: border-box;
}
.foods-wrap{
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 650px;
}

.foods{
    border-radius: 5px;
    width: 100%;
    height: 450px;
    overflow-x: auto;
    box-shadow:  -1px  -1px 2px 0 rgba(0, 0, 0, 0.2), 
                 2px 2px 2px 0 rgba(0,0,0, 0.2),
                 3px 3px 2px 0 rgba(0,0,0,0.2);
    background: rgb(255, 255, 255);
}

.foods .foods-list{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 5px 10px;
}
.foods-list li{ 
    padding: 5px;
    margin: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: bold;
    
}
.foods-list input{
    background-image: linear-gradient(to right, #02aab0, #00cdac);
    border: none;
    border-radius: 15px;
    padding: 10px;
    color:aliceblue;
    font-weight: bold;
    box-shadow: 1px 3px 2px 0 rgb(235, 229, 229);
    outline: none;
}
.foods-list input:hover{
    cursor: pointer;
}
.food-images{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
</style>