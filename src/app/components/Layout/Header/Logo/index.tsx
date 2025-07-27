import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
    return (
        <Link href="/">
            <div className="">
                <Image
                    src={"/logo.png"}
                    alt="dsign-logo"
                    width={100}
                    height={40}
                />
            </div>
        </Link>
    );
};

export default Logo;
