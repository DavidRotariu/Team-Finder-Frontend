import { Button, Title } from '@mantine/core'
import { useNavigate } from 'react-router-dom';

const Expired = () => {

    const navigate = useNavigate();

    return (
        <article className="bg-darkcanvas h-screen flex flex-col items-center justify-center">
            <Title order={1} className="text-white text-5xl select-none text-center mb-[100px]">
                <span className="text-accent">Pay up.</span> This organization's account has been <span className="text-accent">suspended</span>
            </Title>
            <div className="flex space-x">
                <Button variant="filled" size="xl" radius="lg" className="bg-accent mx-[50px]"
                    onClick={() => navigate('/membership')}>
                    View membership
                </Button>
            </div>
        </article>
    )
}

export default Expired