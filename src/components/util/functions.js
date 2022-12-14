export const SORT_ARRAY_BY_WINS = (entry1, entry2) => (entry1.wins < entry2.wins) ? 1 : (entry1.wins > entry2.wins) ? -1 : 0

export const SORT_ARRAY_BY_TOTAL_GAMES = (entry1, entry2) => (entry1.total_games < entry2.total_games) ? 1 : (entry1.total_games > entry2.total_games) ? -1 : 0

export const SORT_ARRAY_BY_LOSSES = (entry1, entry2) => ((entry1.total_games - entry1.wins) < (entry2.total_games - entry2.wins)) ? 1 : (entry1.total_games - entry1.wins) > (entry2.total_games - entry2.wins) ? -1 : 0  