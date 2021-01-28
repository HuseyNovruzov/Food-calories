<template>
    <div class="selectedFoodWrap">
        <h2>Calculate Calories</h2>
        <div class="selectedFoodsBox">
            <ul class="selectedFoods">
                <li v-for="item in selectedItem" v-bind:key="item">
                    <img :src="item.food.image" class="food-images"/>
                    <p class="title">{{ item.food.label }}</p>
                    <div class="selector">
                        <input type="number" size="10" class="number" disabled/>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CalorieList',
    props : ['selectedItem'],
    
    methods : {
        showSliderValue(){
            let slider = document.getElementById('sliderRange');
            console.log(slider.value);

        }
    }
}
</script>

<style>
.selectedFoodWrap{
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 10px;
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
}
.food-images{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

</style>