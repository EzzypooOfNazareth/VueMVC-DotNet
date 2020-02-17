var app = new Vue({
    el: '#app',
    data: {
        accountName: 'Ezzypoo',
        fullName: 'Ezra Moore',
        accountCode: 'ACAU2020',
        lobName: 'Commercial Auto',
        insureAgency: 'Berkshire Example Agency',
        startDate: '',
        expirationDate: '',
        status: '',
        isHidden: true,
        error: '',
        loading: false
    },
    created() {
        this.fetchData()
    },
    methods: {
        async fetchData() {
            try {
                var response = await fetch('http://localhost:8080/good-sample')

                var data = await response.json()

                console.log(data)
                this.accountName = data.accountName
                this.fullName = data.fullName
                this.accountCode = data.accountCode
                this.lobName = data.lobName
                this.insureAgency = data.insureAgency
                this.startDate = data.startDate
                this.expirationDate = data.expirationDate
                this.status = data.status
            } catch (e) {
                console.log(e)
            }
        },
        toggleHidden: function () {
            this.isHidden = !this.isHidden;
        }
    }
})