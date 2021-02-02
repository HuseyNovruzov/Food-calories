<script>

import { Doughnut } from 'vue-chartjs'
export default {
    extends: Doughnut,
    
    mounted(){
        this.renderChart({
            labels: ['carb', 'calorie', 'protein'],
            datasets:[{
                data: [10,30,69],
                backgroundColor: [
                    'red',
                    'yellow',
                    'springgreen'
                ]
            }]
        }, this.options)
    }
        
}
</script>