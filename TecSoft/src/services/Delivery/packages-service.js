import http from '../http-common'

class PackagesService{
    getAll(){
        return http.get('/packages');
    }
    getAllByState(id){
        return http.get(`/packages/state/${id}`)
    }
    updatePackageState(id,value){
        return http.put(`packages/updatestate/${id}?value=${value}`);
    }
}

export default new PackagesService();
