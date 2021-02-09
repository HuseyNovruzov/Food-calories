<script>

import { Doughnut } from 'vue-chartjs'
export default {
    extends: Doughnut,
    props: ['kkal', 'protein', 'fat'],
    mounted(){
        this.renderChart({
            labels: [this.kkal + 'kkal', this.protein + 'protein', this.fat + 'fat'],
            datasets:[{
                data: [this.kkal, this.protein, this.fat],
                backgroundColor: [
                    '#1684f9',
                    '#ffff50',
                    '#8ffa10'
                ],
                
            }],
        }, 
        this.options)
    }
        
}
</script>