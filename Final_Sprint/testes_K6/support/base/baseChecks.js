import { check } from 'k6';

export class BaseChecks {
    checkStatusCode(response, expectedStatus = 200){
        check( response, {
            'status code check': (r) => r.status === expectedStatus,
        })
    }

    checkResponseId(response){
        check(response, {
            'response id': (r) => r.body.includes('_id'),
        });
    }

    checkResponseSize(response, expectedSize = 1024){
        check( response, {
            'response size <= 1024': (r) => r.body.length <= expectedSize,
        })
    }

    checkResponseTime(response, expectedTime = 300){
        check( response, {
            'response time': (r) => r.timings.duration <= expectedTime,
        });        
    }

    checkResponseMoviePostSuccess(response, expectedStatus = 201){
        check(response, {
            'post check': (r) => r.body.includes('Filme criado com sucesso'),
        });
        check( response, {
            'status code check': (r) => r.status === expectedStatus,
        });
        check(response, {
            'response id': (r) => r.body.includes('_id'),
        })
    }
    
    checkResponseMovieGetSuccess(response, expectedStatus = 200){
        check(response, {
            'get check': (r) => r.body.includes('[]'),
        });
        check( response, {
            'status code check': (r) => r.status === expectedStatus,
        })
    }

    checkResponseMovieGetIdSuccess(response, expectedStatus = 200){
        check(response, {
            'get id check': (r) => r.body.includes('title'),
        });
        check( response, {
            'status code check': (r) => r.status === expectedStatus,
        })
    }

    checkResponseMovieGetIdErro(response, expectedStatus = 404){
        check(response, {
            'get id check': (r) => r.body.includes('Filme não encontrado'),
        });
        check( response, {
            'status code check': (r) => r.status === expectedStatus,
        })
    }

    checkResponseMoviePutSuccess(response, expectedStatus = 200){
        check(response, {
            'response check': (r) => r.body.includes('Filme atualizado com sucesso'),
        });
        check(response, {
            'put check': (r) => r.body.includes('title'),
        });
        check( response, {
            'status code check': (r) => r.status === expectedStatus,
        })
    }

    checkResponseMovieDelSuccess(response, expectedStatus = 204){
        check(response, {
            'delete check': (r) => r.body.includes('Filme excluído com sucesso'),
        });
        check( response, {
            'status code check': (r) => r.status === expectedStatus,
        })
    }

    checkResponseTicketsPostSuccess(response, expectedStatus = 201){
        check(response, {
            'post check': (r) => r.body.includes('Ticket criado com sucesso'),
        });
        check( response, {
            'status code check': (r) => r.status === expectedStatus,
        });
        check(response, {
            'response id': (r) => r.body.includes('_id'),
        })
    }

}
