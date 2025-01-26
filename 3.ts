const monthlyRevenue = {
    "01": 200, "02": 220, "03": 300, "04": 350, "05": 100, "06": 400,
    "07": 500, "08": 250, "09": 150, "10": 350, "11": 200, "12": 400,
    "13": 300, "14": 100, "15": 400, "16": 500, "17": 250, "18": 150,
    "19": 350, "20": 200, "21": 400, "22": 300, "23": 100, "24": 400,
    "25": 500, "26": 250, "27": 150, "28": 350, "29": 200, "30": 400,
    "31": 300,
};
function calculateMonthlyRevenue(revenue: { [key: string]: number }, month: string) {
    const daysInMonth = {
        "01": 31, "02": 28, "03": 31, "04": 30,
        "05": 31, "06": 30, "07": 31, "08": 31,
        "09": 30, "10": 31, "11": 30, "12": 31,
    };
    if (!daysInMonth.hasOwnProperty(month)) {
        throw new Error(`Erro: Mês inválido.`);
    }

    const validDays = Object.keys(revenue).filter(
        (day) => parseInt(day) <= daysInMonth[month]
    );

    if (validDays.length !== Object.keys(revenue).length) {
        throw new Error(
            `Erro: O número de dias excede o máximo para o mês determinado (${daysInMonth[month]} dias).`
        );
    }

    const validValues = validDays
        .map((day) => revenue[day])
        .filter((value) => value !== null && value > 0);

    const minRevenue = Math.min(...validValues);
    const maxRevenue = Math.max(...validValues);
    const averageRevenue =
        validValues.reduce((sum, value) => sum + value, 0) / validValues.length;

    const daysAboveAverage = validValues.filter(
        (value) => value > averageRevenue
    ).length;

    return {
        minRevenue,
        maxRevenue,
        daysAboveAverage,
    };
}

try {
    const month = "01";
    const result = calculateMonthlyRevenue(monthlyRevenue, month);
    console.log("Menor Faturamento:", result.minRevenue);
    console.log("Maior Faturamento:", result.maxRevenue);
    console.log("Dias com faturamento acima da média:", result.daysAboveAverage);
} catch (error) {
    console.error(error.message);
}
