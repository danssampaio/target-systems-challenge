const revenueByState: { [state: string]: number } = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Others: 19849.53,
};

function calculatePercentage(revenue: { [state: string]: number }) {
    const total = Object.values(revenue).reduce(
        (sum, value) => sum + value,
        0,
    );

    const percentages = Object.entries(revenue).map(([state, value]) => ({
        state,
        percentage: ((value / total) * 100).toFixed(2) + "%",
    }));

    return percentages;
}

const percentages = calculatePercentage(revenueByState);
percentages.forEach(({ state, percentage }) =>
    console.log(`Estado: ${state}, Percentual: ${percentage}`),
);
