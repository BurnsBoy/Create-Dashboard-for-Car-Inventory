const token = '47662da35bf42af05b9280593bbbe36d0e2acab28f563e5a'

export const server_calls = {
    get: async () => {
        console.log("hi!")
        const response = await fetch(`https://tame-aquatic-eagle.glitch.me/api/cars`,
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    }    

}