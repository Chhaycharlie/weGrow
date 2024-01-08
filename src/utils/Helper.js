export const calculatePostsByMonth = (posts) => {
  const countsByMonth = {};

  posts.forEach((post) => {
    const timestamp = post?.data?.timestamp.toDate(); // Convert Firestore timestamp to JavaScript Date object
    const monthKey = `${timestamp.getFullYear()}-${timestamp.getMonth() + 1}`;

    if (countsByMonth[monthKey]) {
      countsByMonth[monthKey]++;
    } else {
      countsByMonth[monthKey] = 1;
    }
  });

  //check sort object value by compare date
  const sortedCounts = Object.entries(countsByMonth).sort(
    (a, b) => new Date(a[0]) - new Date(b[0])
  );

  const result = sortedCounts.map(([_, count]) => count);

  return result;
};
