import professionalsData from "../../../resources/professionals.json";

interface ProfessionalsProps {
    icon: string;
    time: string;
    company: string;
    position: string;
    description: string;
    color: string;
}
const getProfessionals = () => {
    const professionals: ProfessionalsProps[] = [];
    for (let i = 0; i < professionalsData.length; i++) {
        let professional: ProfessionalsProps = {
            icon: professionalsData[i]?.icon,
            time: professionalsData[i]?.time,
            company: professionalsData[i]?.company,
            position: professionalsData[i]?.position,
            description: professionalsData[i]?.description,
            color: professionalsData[i]?.color
        };
        professionals.push(professional);
    }
    // console.log(professionals);
    return professionals;
};

export default getProfessionals;