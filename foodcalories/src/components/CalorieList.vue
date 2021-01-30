<template>
    <div class="selectedFoodWrap">
        <h2>Calculate Calories</h2>
            <div class="selectedFoodsBox">
                <ul class="selectedFoods">
                    <li v-for="(item, index) in selectedItem" v-bind:key="index" >
                        <img :src="item.food.image" class="food-images"/>
                        <p class="title">{{ item.food.label }}</p>
                        <div class="selector" >
                            <input type="number" size="10" class="number" v-if="type[index]==='number'" />
                            <input type="range" min="100" max="1000" value="1" v-else/>
                        </div>
                    </li>
                </ul>
            </div>
        
    </div>
</template>

<script>

export default {
    name: 'CalorieList',
    props: ['selectedItem', 'type'],
}
</script>

<style>
.selectedFoodWrap{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    padding: 10px;
    border: 1px solid slategray;
}
.selectedFoodWrap .optionBox, .selectedFoodsBox{
    margin-top: 5px;
}

.selectedFoodsBox{
    border-radius: 5px;
    width: 100%;
    height: 450px;
    overflow-x: auto;
    box-shadow:  -1px  -1px 2px 0 rgba(0, 0, 0, 0.2), 
                 2px 2px 2px 0 rgba(0,0,0, 0.2),
                 3px 3px 2px 0 rgba(0,0,0,0.2);
    background: rgb(255, 255, 255);
}

.selectedFoods{
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 10px;
}
.selector{
    display: flex;
    justify-content: center;
    align-items: center;
}

.selectedFoods li{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
}
.title{
    font-weight: bold;
}
.selectedFoods li .slider{
    width: 40%;
}
.number{
    width: 20%; 
    border: none;
    outline: none;
    border-bottom: 1px solid; 
}
.food-images{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
.optionBox{
    width: 100%;
}
.optionBox select{
    padding: 5px;
}
</style>